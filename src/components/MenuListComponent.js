import React, { useState, useEffect } from 'react';
import { DATA_SOURCE } from './../datasrc/data.js';
import ElementGenerator from './ElementGenerator';

const MenuListComponent = ({ CategoryID, IsCollection }) => {
  let totalColumns = 0;
  let totalRows = 0;

  const [tableMatrix, setTableMatrix] = useState([]);
  let menuList = DATA_SOURCE.Item.filter(
    (inst) => inst.CategoryID === CategoryID
  );

  // Construct Matrix
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
      }
      tempMatrix.push(columns);
    }

    setTableMatrix(() => {
      return tempMatrix;
    });
  };

  const addRow = () => {
    setTableMatrix((previous) => {
      let previousCopy = JSON.parse(JSON.stringify(previous));

      //Find indexOf which present in last Row & last column
      let lastColumn = previousCopy[previousCopy.length - 1].length;

      // Duplicating last row & Appending Delete Button
      if (previousCopy[previousCopy.length - 1][lastColumn - 1].InputID != 10) {
        previousCopy.push([
          ...previousCopy[previousCopy.length - 1],
          { InputID: 10 },
        ]);
      } else {
        // Duplicating last row
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

  return (
    <div>
      <table>
        {tableMatrix.map((row, rowIndex) => {
          if (row?.[0] === undefined || row?.[0] === null) {
            //Remove Empty Rows
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
      {IsCollection && <button onClick={addRow}> Add New Rows</button>}
    </div>
  );
};

export default MenuListComponent;
