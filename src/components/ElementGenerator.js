import React from 'react';
import { DATA_SOURCE } from './../datasrc/data.js';
const ElementGenerator = ({
  CategoryID,
  ItemID,
  Name,
  InputID,
  ColumnWiseDisplayOrder,
  DropDownID,
  IsActive,
  IsHeader,
  RowWiseDisplayOrder,
  Value,
  ListNo,
  RestaurentID,
  IsCollection,
  ADO,
  IsRedundant,

  deleteRow,
  setValue,
  rowIndex,
  colIndex,
}) => {
  const selectInputType = () => {
    switch (InputID) {
      case 1:
        return (
          <div>
            <input
              placeholder="Enter value"
              onChange={(e) => {
                setValue(e.target.value, rowIndex, colIndex);
              }}
              value={Value}
            />
          </div>
        );
      case 2:
        return (
          <div>
            {' '}
            <input
              type="number"
              placeholder="Enter number"
              onChange={(e) => {
                setValue(e.target.value, rowIndex, colIndex);
              }}
              value={Value}
            />
          </div>
        );
      case 3:
        return (
          <div>
            <SelectComponent
              DropDownID={DropDownID}
              onChange={(e) => {
                console.log('e.target.value', e.target.value);
                setValue(e.target.value, rowIndex, colIndex);
              }}
            />
          </div>
        );
      case 7:
        return <div>{Name}</div>;

      case 10:
        return (
          <button
            onClick={() => {
              console.log('rowIndex', rowIndex);
              deleteRow(rowIndex);
            }}
          >
            delete
          </button>
        );
    }
  };

  const SelectComponent = ({ DropDownID, onChange }) => {
    let dropdownList = DATA_SOURCE.ItemData.filter(
      (inst) => inst.DropDownID === DropDownID
    ).sort((a, b) => a.DisplayOrder - b.DisplayOrder);

    return (
      <select onChange={onChange}>
        {dropdownList.map((inst) => (
          <option
            Value={inst.DropDownValueID}
            selected={inst.DropDownValueID == Value}
          >
            {inst.ListItemName}
          </option>
        ))}
      </select>
    );
  };

  return <div>{selectInputType()}</div>;
};

export default ElementGenerator;
