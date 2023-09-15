import React from 'react';

const RestaurantComponent = ({ RestaurentID, PlantName }) => {
  return <div>{`${PlantName} - ${RestaurentID}`}</div>;
};

export default RestaurantComponent;
