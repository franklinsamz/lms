import React, { Component } from 'react';
import { Navbar,Nav,NavItem} from 'react-bootstrap';
import MaterialIcon from 'material-icons-react';
import './SideBar.css';

class SideBar extends Component {
      render() {
        let ms = this.props.lmsdata.mainSection;
        return (
            <div className="side-bar">
                <div onClick={() => this.props.onMainClick('DASHBOARD')} className={`side-bar-btn ${ms === "DASHBOARD" ? 'active' : ""}`} >
                    <MaterialIcon icon="dashboard" color='#fff' size="" />
                    <div>Dashboard</div>
                </div>
                <div onClick={() => this.props.onMainClick('COURSE')}  className={`side-bar-btn ${ms === "COURSE" ? 'active' : ""}`}>
                    <MaterialIcon icon="chrome_reader_mode" color='#fff' size="" />
                    <div>Course</div>
                </div>
                <div onClick={() => this.props.onMainClick('LIBRARY')}  className={`side-bar-btn ${ms === "LIBRARY" ? 'active' : ""}`}>
                    <MaterialIcon icon="library_books" color='#fff' size="" />
                    <div>Library</div>
                </div>
                <div onClick={() => this.props.onMainClick('BUSINESSUNIT')}  className={`side-bar-btn ${ms === "BUSINESSUNIT" ? 'active' : ""}`}>
                    <MaterialIcon icon="library_books" color='#fff' size="" />
                    <div>Business Unit</div>
                </div>
                <div onClick={() => this.props.onMainClick('USERS')}  className={`side-bar-btn ${ms === "USERS" ? 'active' : ""}`}>
                    <MaterialIcon icon="people" color='#fff' size="" />
                    <div>Users</div>
                </div>
                <div onClick={() => this.props.onMainClick('REPORT')}  className={`side-bar-btn ${ms === "REPORT" ? 'active' : ""}`}>
                    <MaterialIcon icon="description" color='#fff' size="" />
                    <div>Report</div>
                </div>
            </div>


    );
  }
}
export default SideBar;
