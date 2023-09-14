import React from 'react';

import MenuListComponent from './MenuListComponent.js';

const CategoryComponent = ({
  CategoryID,
  CategoryName,
  IsCollection,
  DisplayOrder,
  CategoryIsActive,
}) => {
  return (
    <div>
      <b> {CategoryName} </b>
      <MenuListComponent CategoryID={CategoryID} IsCollection={IsCollection} />
    </div>
  );
};

export default CategoryComponent;
