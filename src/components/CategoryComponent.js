import React from 'react';

import MenuListComponent from './MenuListComponent.js';

import styled from 'styled-components';

const Header = styled.h1`
  font-size: '18px';
  font-weight: '600'; 
  margin-bottom: '8px';`;

const CategoryComponent = ({ CategoryID, CategoryName, IsCollection }) => {
  return (
    <div style={{ margin: '40px' }}>
      <Header>{CategoryName}</Header>
      <MenuListComponent CategoryID={CategoryID} IsCollection={IsCollection} />
    </div>
  );
};

export default CategoryComponent;
