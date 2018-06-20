import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { connect, Provider } from 'react-redux';
import  TopBar  from './components/TopBar';
import  SideBar  from './components/SideBar';
import LmsState from './LmsState';
import DashBoard from './components/DashBoard';
import Course from './components/Course';
import  Login  from './components/Login';
import  Users  from './components/Users';
import  BusinessUnit  from './components/BusinessUnit';
import './LmsAdmin.css';


let allStates=combineReducers({
    LmsState:LmsState
})

let allStore = createStore(allStates)

class LmsAdmin extends Component {
    constructor(props) {
        super();
        this.state = {}
        this.updateMainSection = this.updateMainSection.bind(this)
        this.onMainClick = this.onMainClick.bind(this)
        }
    updateMainSection(ms){
        allStore.dispatch({
            type: 'UPDATE_MAIN',
            mS: ms
        })
    }
    onMainClick(ms){
        this.updateMainSection(ms)
        }
    componentDidMount() {
        this.updateMainSection('DASHBOARD');
        }
    render() {
        return (
          <div>
              <Provider store={allStore}>
                  <ConnectedLmsAdminDom onMainClick={this.onMainClick} />
              </Provider>
          </div>

        );
    }
}

class LmsAdminDom extends Component{
    render() {
        return (
            <div className="root-in">
                <TopBar />
                <SideBar lmsdata={this.props.lmsdata} onMainClick={this.props.onMainClick}/>
                <MainContainer lmsdata={this.props.lmsdata}/>
            </div>
        );
    }
}

class MainContainer extends Component{
    render(){
    	console.log(this.props.lmsdata.mainSection);
        return (
            <div className="maincontainer">
                <div className="wrapper">
                {
						  this.props.lmsdata.mainSection === 'DASHBOARD' &&
						  <DashBoard />
                }
                {
						  this.props.lmsdata.mainSection === 'COURSE' &&
						  <Course />
                }

                    {
                        this.props.lmsdata.mainSection === 'BUSINESSUNIT' &&
                        <BusinessUnit />
                    }
                    {
                        this.props.lmsdata.mainSection === 'LOGIN' &&
                        <Login />
                    }
                    {
                        this.props.lmsdata.mainSection === 'USERS' &&
                        <Users />
                    }
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state,ownProps) => {

    return {
        lmsdata:state.LmsState
    }
}

const ConnectedLmsAdminDom = connect(mapStateToProps,{})(LmsAdminDom);
export default LmsAdmin;