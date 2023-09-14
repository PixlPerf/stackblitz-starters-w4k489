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
    console.log('totalRows', totalRows);
    console.log('totalColumns', totalColumns);
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
      console.log('previous', previous);
      previous.push(previous[previous.length - 1]);
      return previous;
    });
  };

  return (
    <div>
      <table>
        {tableMatrix.map((row, index) => {
          if (row?.[0] === undefined) {
            return null;
          } else {
            return (
              <tr>
                {row.map((Obj) => {
                  return Obj?.IsHeader === 'Y' ? (
                    <th>{Obj?.Name}</th>
                  ) : (
                    <td>
                      <ElementGenerator {...Obj} />
                    </td>
                  );
                })}
              </tr>
            );
          }
        })}
      </table>
      {IsCollection ? <button onClick={addRow}> Add New Rows</button> : 'no'}
    </div>
  );
};

export default MenuListComponent;
