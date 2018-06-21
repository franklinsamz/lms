import React from 'react';
import Filter from './Filter'
import NewBusinessUnit  from './NewBusinessUnit'


export default class FilterList extends React.Component {

    constructor(props) {
     super(props);
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(e){
        console.log(e.target.value);
          this.props.searchFilter(e.target.value);
    }
  render() {
          return (
          <div className="row">

              <div className="top-bar">
                  <div className="title-area">
                          <h3 className="title-page">Business Units
                              <span className="count-select" id="usercount">({this.props.campgrounds.count()})</span></h3>
                  </div>
                  <ul className="filter-options">
                     {this.props.filters.map(item =>
                          <Filter id={item.get('id')}
                                  key={item.get('id')}
                                  changeFilter={this.props.changeFilter}
                          />
                        )}
                  </ul>
                  <form name="searchForm" action="https://lmsv2.labsls.com/beta/user/learnerGroup" method="post">
                          <div className="option-area">
                              <div className="search-panel">
                                  <input type="text" id="search" name="search" className="input-text search-box" placeholder="Search by Name, Code, Region" onChange={ this.handleChange } />
                                  <a href="javascript:void(0);" id="opaic" onClick={ this.handleChange }></a>
                                      <span className="search-ico">  </span>
                              </div>
                              <div className="button-area">
                                  <NewBusinessUnit/>
                              </div>
                              {/*<div className="drop-options">*/}
                                  {/*<div className="select-box">*/}
                                      {/*<select id="bustype" name="bustype" onChange="submitSearch()">*/}
                                          {/*<option value="0">Select Type</option>*/}
                                          {/*<option value="1">Retail</option>*/}
                                          {/*<option value="2">HO</option>*/}
                                          {/*<option value="3">Branches</option>*/}
                                          {/*<option value="4">Regional Offices</option>*/}
                                      {/*</select>*/}
                                  {/*</div>*/}
                              {/*</div>*/}
                          </div>
                  </form>
              </div>
          </div>
  )}
}
