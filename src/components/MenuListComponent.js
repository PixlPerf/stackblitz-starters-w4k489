import React, { useState, useEffect } from 'react';
import { DATA_SOURCE } from './../datasrc/data.js';

import ElementGenerator from './ElementGenerator';

const MenuListComponent = ({ CategoryID, IsCollection }) => {
  let menuList = DATA_SOURCE.Item.filter(
    (inst) => inst.CategoryID === CategoryID
  );

  let totalColumns = 0;
  let totalRows = 0;
  // let tableMatrix = [];

  const [tableMatrix, setTableMatrix] = useState([]);

  useEffect(() => {
    menuList.map((inst) => {
      if (totalColumns < inst.ColumnWiseDisplayOrder) {
        totalColumns = inst.ColumnWiseDisplayOrder;
      }
      if (totalRows < inst.RowWiseDisplayOrder) {
        totalRows = inst.RowWiseDisplayOrder;
      }
    });

    constructTable(menuList, totalRows, totalColumns);
  }, []);

  const constructTable = (menuList, totalRows, totalColumns) => {
    let tempMatrix = [];
    for (let row = 0; row < totalRows; row++) {
      let columns = [];
      for (let column = 0; column < totalColumns; column++) {
        columns.push(
          menuList.find(
            (inst) =>
              inst.RowWiseDisplayOrder === row + 1 &&
              inst.ColumnWiseDisplayOrder === column + 1
          )
        );
        console.log('columns', columns);
      }
      tempMatrix.push(columns);
    }

    console.log('tempMatrix', tempMatrix);
    setTableMatrix(() => {
      return tempMatrix;
    });
  };

  const addRow = () => {
    setTableMatrix((previous) => {
      let previousCopy = JSON.parse(JSON.stringify(previous));

      let lastColumn = previousCopy[previousCopy.length - 1].length;
      if (previousCopy[previousCopy.length - 1][lastColumn - 1].InputID != 10) {
        previousCopy.push([
          ...previousCopy[previousCopy.length - 1],
          { InputID: 10 },
        ]);
      } else {
        previousCopy.push([...previousCopy[previousCopy.length - 1]]);
      }
      return previousCopy;
    });
  };

  const setValue = (val, rowIndex, colIndex) => {
    setTableMatrix((previous) => {
      let previousCopy = JSON.parse(JSON.stringify(previous));
      previousCopy[rowIndex][colIndex].Value = val;
      return previousCopy;
    });
  };

  const deleteRow = (rowIndex) => {
    setTableMatrix((previous) => {
      let previousCopy = JSON.parse(JSON.stringify(previous));
      previousCopy.splice(rowIndex, 1);
      return previousCopy;
    });
  };

  return (
    <div>
      <table>
        {tableMatrix.map((row, rowIndex) => {
          if (row?.[0] === undefined || row?.[0] === null) {
            return null;
          } else {
            return (
              <tr>
                {row.map((Obj, colIndex) => {
                  return Obj?.IsHeader === 'Y' ? (
                    <th>{Obj?.Name}</th>
                  ) : (
                    <td>
                      <ElementGenerator
                        {...Obj}
                        deleteRow={deleteRow}
                        setValue={setValue}
                        rowIndex={rowIndex}
                        colIndex={colIndex}
                      />
                    </td>
                  );
                })}
              </tr>
            );
          }
        })}
      </table>
      {IsCollection ? <button onClick={addRow}> Add New Rows</button> : ''}
    </div>
  );
};

export default MenuListComponent;
