import React from 'react';
import { Container,Media, Row, Col } from 'reactstrap';
import "./businessunit.css"
export default class ListItems extends React.Component {

  render() {
    let img_url = "https://lmsv2.labsls.com/beta/photo/" +  this.props.image

    return (

        <div className="panel list-block usr_list_block course-listing" >
            <ul id={this.props.key}>

                <li>{this.props.email}</li>
                <li><img src={img_url} /></li>
                <li>{this.props.phone_mobile}</li>
                <li>{this.props.first_name}</li>
                <li>{this.props.last_name}</li>
                <li>{this.props.designation}</li>

            </ul>

        </div>


      )
  }
}
