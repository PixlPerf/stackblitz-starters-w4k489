import React from 'react';
import { DATA_SOURCE } from './../datasrc/data.js';

const SelectComponent = ({ DropDownID, onChange, Value }) => {
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

export default SelectComponent;
