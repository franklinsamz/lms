import React, { Component } from 'react';
import axios from 'axios';
import {createStore} from 'redux';
import reducer from '../reducers'
//import {CampFilterAppMainContainer}  from './Users/CampFilterAppMainContainer'
import FilterAppMainContainer  from './BusinessUnits/FilterAppMainContainer'
const allStore = createStore(reducer)

class BusinessUnit extends Component {
    render() {
        return (
            <div>

                    <FilterAppMainContainer />


            </div>
        );
    }
}


export default BusinessUnit