import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../../actions/action_creators';
import FilterList from './FilterList';
import List from './List';
import {createStore} from 'redux';
import reducer from '../../reducers'
const store = createStore(reducer)
export class FilterApp extends React.Component {
  render() {
    return (
      <div className="content-wrapper">
         <FilterList {...this.props}/>
         <List {...this.props}/>
      </div>
  )};
}

function mapStateToProps(state) {
    let filters = state.get('filters')
    let users = state.get('users')
    let filtered_users = users
   let active_filters = filters.filter(
    item => item.get('inuse') === true
  )
    let searchValue=state.get('searchfilter').get(1).get('inuse').toLowerCase()
    console.log(searchValue);
    if (state.get('searchfilter').get(0).get('inuse')!=true)
    {
        active_filters.forEach(filter => {
            filtered_users = filtered_users.filter(
                item => item.get('gender').get(filter.get('id')) === true
            )
        })
    }
    else{

        filtered_users.forEach(filter => {
            filtered_users = filtered_users.filter(
                item => item.get('first_name').toLowerCase().search(searchValue) >= 0
            )
        })



    }

    return {
        filters:filters,
        users:filtered_users,

  };

}
export const FilterAppContainer = connect(mapStateToProps,actionCreators)(FilterApp);

