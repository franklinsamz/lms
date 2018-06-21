import React, { Component } from 'react';
import './list.css';
import {courseServices} from '../services'



class Course extends Component {
  render() {
    return (
        <div className="content-wrapper">
        		<div className="row">
        				<ListTop />
                </div>
            <div className="row">
        				<InnerSec />
        		 </div>
        </div>
    );
  }
}

class ListTop extends Component{
	render(){
		return(
				<div className="top-bar">
						<div className="title-area">
						    <h3 className="title-page">Courses
						    <span className="count-select"></span>
						    </h3>
						 </div>
						 <div className="option-area ">
				  		 <div className="search-panel">
       					  <input id="search" className="input-text search-box" type="text" placeholder="Search" name="search" value=""></input>
 							  <a id="opaic" href="#"></a>
						  	  <span className="search-ico"></span>
       			    </div>
        		  	    <div className="button-area">
        		  	      <a className="btn general-btn icon-lib add-ico" id="pgm_buttonForModal">New Course</a>
        		  	    </div>
   			      </div>
				</div>
		     
		)
	}
}

class InnerSec extends Component{
    state = {
        listcourses: [],

    }
    componentDidMount() {
        const user = {
            uId: "38",
            previewcId: "p",

        };


        var promiseObj = courseServices.listcourse(user);
        promiseObj.then(res => {
            const listcourses = res.data;
            console.log(listcourses);
            this.setState({listcourses});
        })
    }
        render(){
		return(
		<div id="list">
            { this.state.listcourses.map(listcourses =>


		  	<div  className="panel list-block usr_list_block course-listing">

     			 <div className="row">
       				<div className="list-left-thumb">
        					  <a className="blackfont thum-list-img" href="">
        					  <img id="img_user" src={ "https://lmsvignet.s3.amazonaws.com/assets/images/" + listcourses.bannerimage }  />
        					  </a>
       				 </div>
					 <div className="list-right-details">
						 <h4 className="hdtitle"><a className="blackfont">{listcourses.prgm_title}</a>
						 </h4>
						 <p className="cour_desc_detail course-description">{listcourses.prgm_desc}
						 </p>
						 <p>
							 <label className="tag_list"><span className="blu-txt">{listcourses.total_module}</span> Modules</label>
							 <label className="tag_list"><span className="blu-txt">{listcourses.module_taken}</span> Users</label>
						 </p>
					 </div>
       				 
                </div>


		   </div>
            )}




		</div>
	);
	}
}




export default Course;
