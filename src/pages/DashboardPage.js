import React from 'react';
import { DATA_SOURCE } from './../datasrc/data.js';

import CategoryComponent from './../components/CategoryComponent.js';

const DashboardPage = () => {
  let categoryList = DATA_SOURCE.Category.sort(
    (a, b) => a.DisplayOrder - b.DisplayOrder
  );

  return (
    <div>
      {categoryList.map((inst) => (
        <CategoryComponent {...inst} />
      ))}
    </div>
  );
};

export default DashboardPage;
