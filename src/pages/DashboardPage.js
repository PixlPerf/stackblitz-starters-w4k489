import React from 'react';
import { DATA_SOURCE } from './../datasrc/data.js';

import CategoryComponent from './../components/CategoryComponent.js';
import RestaurantComponent from './../components/RestaurantComponent.js';

const DashboardPage = () => {
  let categoryList = DATA_SOURCE.Category.sort(
    (a, b) => a.DisplayOrder - b.DisplayOrder
  );

  return (
    <div>
      <RestaurantComponent {...DATA_SOURCE.Restaurent[0]} />
      {categoryList.map((inst) => (
        <CategoryComponent {...inst} />
      ))}
    </div>
  );
};

export default DashboardPage;
