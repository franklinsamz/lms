import React, { Component } from 'react';
import axios from 'axios';
import {createStore} from 'redux';
import reducer from '../reducers'
import { userServices} from '../services'
import {FilterAppMainContainer}  from './Users/FilterAppMainContainer'
import {connect} from "react-redux";
import LmsState from '../LmsState';
const allStore = createStore(reducer)
class Users extends Component {

    componentWillMount() {


    }
    render() {
        return (
            <div>
              <FilterAppMainContainer />
            </div>
        );
    }
}



export default Users