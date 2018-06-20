import React from 'react';
export default class Filter extends React.Component {
  render() {

    return (
        <li className="filter-item  ">
            <a href="javascript:void(0)" id={this.props.id} className="filter-click" onClick={() => this.props.changeFilter(this.props.id)}>
                  {this.props.id}
                  <span className="filter-count" id="usercount1">31</span>
                  <span className="filter-no-count" id="usercount2">(31)</span>
               </a>
        </li>
      )
  }
}
