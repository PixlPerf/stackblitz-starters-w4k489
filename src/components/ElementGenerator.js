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
}) => {
  const selectInputType = () => {
    switch (InputID) {
      case 1:
        return (
          <div>
            <input placeholder="Enter value" />
          </div>
        );
      case 2:
        return (
          <div>
            {' '}
            <input type="number" placeholder="Enter number" />
          </div>
        );
      case 3:
        return (
          <div>
            <SelectComponent DropDownID={DropDownID} />
          </div>
        );
      case 7:
        return <div>{Name}</div>;

      case 10:
        return <button>delete</button>;
    }
  };

  const SelectComponent = ({ DropDownID }) => {
    let dropdownList = DATA_SOURCE.ItemData.filter(
      (inst) => inst.DropDownID === DropDownID
    ).sort((a, b) => a.DisplayOrder - b.DisplayOrder);

    return (
      <select>
        {dropdownList.map((inst) => (
          <option Value={inst.DropDownValueID}>{inst.ListItemName}</option>
        ))}
      </select>
    );
  };

  return <div>{selectInputType()}</div>;
};

export default ElementGenerator;
