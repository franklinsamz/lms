import React, { Component } from 'react';
import {dashboardService} from "../services";
import axios from 'axios'
import './DashBoard.css';
import '../index.css';


 class DashBoard extends Component {
  render() {
    return (
        <div>

           <DashTop />
           <VisitStatus />
            <TopFive />
        </div>
    );
  }
}

class DashTop extends Component {
    state = {
        courseCounts: [],

    }
    componentDidMount() {
        var promiseObj = dashboardService.courseCount();
        promiseObj.then(res => {
            const courseCounts = res.data;
            this.setState({courseCounts});
        })
    }
        render(){
    return(


        <section className="main-in bg-trans">

            { this.state.courseCounts.map(courseCount =>
           <div>



            <div className="dash-thumb">
                <div className="dash-shorts">
                    <div className="dash-header">
                        <h4 className="subheader icon-lib business-ico">Business Units</h4>
                        <a href="https://lmsv2.labsls.com/beta/user/learnergroup">View Details</a>
                    </div>
                    <div className="dash-content">
                        <h5 className="dash-count">{courseCount.region}</h5>
                        <p>{courseCount.region}  Business Units are engaged in learning across {courseCount.region} Regions</p>
                    </div>
                </div>
            </div>

            <div className="dash-thumb">
                <div className="dash-shorts">
                    <div className="dash-header">
                        <h4 className="subheader icon-lib dash-course-ico">Course</h4>
                        <a href="https://lmsv2.labsls.com/beta/programs/index">View Details</a>
                    </div>
                    <div className="dash-content">
                        <h5 className="dash-count">{courseCount.program}</h5>
                        <p>{courseCount.program}  Courses with around {courseCount.course} modules are available in the learner</p>
                    </div>
                </div>
            </div>

            <div className="dash-thumb">
                <div className="dash-shorts">
                    <div className="dash-header">
                        <h4 className="subheader icon-lib dash-learn-ico">Learners</h4>
                        <a href="https://lmsv2.labsls.com/beta/user/index">View Details</a>
                    </div>
                    <div className="dash-content">
                        <h5 className="dash-count">{courseCount.users}</h5>
                        <p>{courseCount.users}  Learners are actively using the system. They belong to {courseCount.designation} different designations</p>
                    </div>
                </div>
            </div>

            <div className="dash-thumb">
                <div className="dash-shorts">
                    <div className="dash-header">
                        <h4 className="subheader icon-lib dash-res-ico">Resource</h4>
                        <a href="https://lmsv2.labsls.com/beta/course/panel">View Details</a>
                    </div>
                    <div className="dash-content">
                        <div className="split-box">
                            <div className="progress-count">
                                <div className="res-count">{courseCount.slider}</div>
                                <div className="res-count-det">
                                    <p>Image Slider</p>
                                    <div className="progress">
                                            <span className="sr-only">90% Complete</span>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-count">
                                <div className="res-count">{courseCount.richtext}</div>
                                <div className="res-count-det">
                                    <p>Rich Text</p>
                                    <div className="progress">
                                            <span className="sr-only">80% Complete</span>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-count">
                                <div className="res-count">{courseCount.assessment}</div>
                                <div className="res-count-det">
                                    <p>Assessment</p>
                                    <div className="progress">
                                            <span className="sr-only">40% Complete</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="split-box">
                            <div className="progress-count">
                                <div className="res-count">{courseCount.quiz}</div>
                                <div className="res-count-det">
                                    <p>Quiz</p>
                                    <div className="progress">
                                            <span className="sr-only">100% Complete</span>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-count">
                                <div className="res-count">{courseCount.photos}</div>
                                <div className="res-count-det">
                                    <p>Photo Capturing</p>
                                    <div className="progress">
                                            <span className="sr-only">50% Complete</span>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-count">
                                <div className="res-count">{courseCount.voice}</div>
                                <div className="res-count-det">
                                    <p>Voice Recording</p>
                                    <div className="progress">
                                            <span className="sr-only">20% Complete</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           </div>
                )}
        </section>



    );
  }
}



class VisitStatus extends Component{
    render(){
        return(
            <section className="main-in padding-20">
            <div className="row">
                    <div className="block-flat pie-widget">
                        <div className="header" >
                            <span className="pull-right"></span>
                            <h3>Application Usage</h3>
                        </div>
                        <div className="graph-block">
                            <img src="https://lmsv2.labsls.com/beta/images/graph-temp.jpg" />
                        </div>
                    </div>
            </div>
            </section>
        );
    }
}


class TopFive extends Component{

    state = {
        topCourses: [],
        topbusinessunits:[],
        topskills:[],
    }

    componentDidMount() {
        var promiseObj = dashboardService.top_course();
        promiseObj.then(res => {
            const topCourses =res.data;
            this.setState({ topCourses });
        })
        var promiseObj = dashboardService.top_businessunit();
        promiseObj.then(res => {
            const topbusinessunits =res.data;
            this.setState({ topbusinessunits });
        })
        var promiseObj = dashboardService.top_skills();
        promiseObj.then(res => {
            const topskills =res.data;
            this.setState({ topskills });
        })





    }


    render(){
        return(
            <section className="main-in bg-trans ">
            <div className="col-md-12">
                <div className="top-activities">

                    <div className="equal-act">
                        <div className="detail-area-business">

                            <div className="user-table-list">
                                <table className="table-toppers">
                                    <thead>
                                    <tr>
                                        <td className="topheader">Top 5 Courses</td>
                                        <td className="skill-header">Learners</td>
                                    </tr>
                                    </thead>
                                </table>
                            </div>
                            <div className="padded-table">
                                <table className="table-toppers">
                                    <tbody>

                                    { this.state.topCourses.map(topCourse =>
                                        <tr>
                                            <td className="top-names" id={topCourse.course_id}>{topCourse.course_name}</td>
                                            <td className="skill-level">{topCourse.coursecnt}</td>
                                        </tr>
                                    )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="equal-act">
                        <div className="detail-area-business">

                            <div className="user-table-list">
                                <table className="table-toppers">
                                    <thead>
                                    <tr>
                                        <td className="topheader">Top 5 Skills</td>
                                    </tr>
                                    </thead>
                                </table>
                            </div>
                            <div className="padded-table">
                                <table className="table-toppers">
                                    <tbody>
                                    { this.state.topskills.map(topskill =>
                                        <tr>
                                            <td className="top-names"key={topskill.skilid}>{topskill.skill}</td>
                                        </tr>
                                    )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="equal-act">
                        <div className="detail-area-business">

                            <div className="user-table-list">
                                <table className="table-toppers">
                                    <thead>
                                    <tr>
                                        <td className="topheader">Top 5 Buisiness Units</td>
                                        <td className="skill-header">Total Learners</td>
                                    </tr>
                                    </thead>
                                </table>
                            </div>
                            <div className="padded-table">
                                <table className="table-toppers">
                                    <tbody>
                                        { this.state.topbusinessunits.map(topbusinessunit =>
                                            <tr>
                                                <td className="top-names"key={topbusinessunit.skilid}>{topbusinessunit.content_name}</td>
                                                <td className="skill-level">{topbusinessunit.usercnt}</td>
                                            </tr>
                                                )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
          </section>
        );
    }
}


export default DashBoard;
