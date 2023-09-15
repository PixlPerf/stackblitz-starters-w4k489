import React from 'react';

const RestaurantComponent = ({
  RestaurentID,
  PlantName,
  ShowShift,
  ModificationPeriod,
  AutoCollection,
  ReportURI,
  PlantIsActive,
  Team,
}) => {
  return <div>{`${PlantName} - ${RestaurentID}`}</div>;
};

export default RestaurantComponent;
