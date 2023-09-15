import React from 'react';
import SelectComponent from './SelectComponent.js';

const INPUT_TYPE = {
  1: 'TEXT_FIELD',
  2: 'NUMBER_FIELD',
  3: 'DROPDOWN',
  7: 'LABEL',
  10: 'CUSTOM_DELETE_BTN',
};

const ElementGenerator = ({
  Name,
  InputID,
  DropDownID,
  Value,
  deleteRow,
  setValue,
  rowIndex,
  colIndex,
}) => {
  const selectInputType = () => {
    switch (INPUT_TYPE[InputID]) {
      case 'TEXT_FIELD':
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
      case 'NUMBER_FIELD':
        return (
          <div>
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
      case 'DROPDOWN':
        return (
          <div>
            <SelectComponent
              DropDownID={DropDownID}
              onChange={(e) => {
                setValue(e.target.value, rowIndex, colIndex);
              }}
              Value={Value}
            />
          </div>
        );
      case 'LABEL':
        return <div>{Name}</div>;

      case 'CUSTOM_DELETE_BTN':
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
      default:
        return <div>{Name}</div>;
    }
  };

  return <div>{selectInputType()}</div>;
};

export default ElementGenerator;
