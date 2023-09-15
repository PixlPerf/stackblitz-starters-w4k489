import React from 'react';

import MenuListComponent from './MenuListComponent.js';

const CategoryComponent = ({ CategoryID, CategoryName, IsCollection }) => {
  return (
    <div style={{ margin: '40px' }}>
      <div style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>
        {CategoryName}
      </div>
      <MenuListComponent CategoryID={CategoryID} IsCollection={IsCollection} />
    </div>
  );
};

export default CategoryComponent;
