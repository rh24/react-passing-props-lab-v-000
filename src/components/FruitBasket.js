import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = props => {
  return (
    <div className="fruit-basket">
      <Filter filters={props.filters} handleChange={props.onUpdateFilter} />
      <FilteredFruitList
        fruit={props.fruit}
        filter={props.currentFilter} />
    </div>
  )
}

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: function() {},
}

export default FruitBasket;

// it doesn't seem very intuitive to have props with different names.
// i.e. App is passing down props of one name that essentially handle the same function as the props in this component.
// e.g. ./App.js `<FruitBasket onUpdateFilter={this.updateFilter} />`
// ./FruitBasket.js `defaultProps { updateFilterCallback }`
