import React from 'react';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom'
import * as actionCreators from '../../actions/action_creators';

import FilterList from './FilterList';
import List from './List';
import axios from 'axios';
import {createStore} from 'redux';
import reducer from '../../reducers'

const store = createStore(reducer)

export class FilterApp extends React.Component {

  render() {
    return (
      <div class="content-wrapper">
         <FilterList {...this.props}/>
         <List {...this.props}/>
      </div>
  )};
}


function mapStateToProps(state) {
    console.log(state);



    let searchfilters = state.get('searchfilter')
    let filters = state.get('filters')
    let campgrounds = state.get('campgrounds')
    let filtered_campgrounds = campgrounds
  let active_filters = filters.filter(
    item => item.get('inuse') === true
  )
    console.log('active_filters');


    let searchValue=state.get('searchfilter').get(1).get('inuse').toLowerCase()

    console.log(searchValue);
    if (state.get('searchfilter').get(0).get('inuse')!=true)
    {
        active_filters.forEach(filter => {
            filtered_campgrounds = filtered_campgrounds.filter(
                item => item.get('properties').get(filter.get('id')) === true
            )
        })

    }
    else{

        filtered_campgrounds.forEach(filter => {
            filtered_campgrounds = filtered_campgrounds.filter(
                item => item.get('title').toLowerCase().search(searchValue) >= 0
            )
        })
    }






    return {
    filters: filters,
    campgrounds: filtered_campgrounds,
      searchfilters:searchfilters
  };




}

export const FilterAppContainer = connect(mapStateToProps,actionCreators)(FilterApp);

