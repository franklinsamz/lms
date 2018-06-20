import React from 'react';
import { Container,Media, Row, Col } from 'reactstrap';
import "./businessunit.css"
export default class ListItems extends React.Component {

  render() {
    let img_url = "https://lmsv2.labsls.com/beta/logo/" +  this.props.image
    return (

        <div className="panel list-block usr_list_block course-listing" >

  <Row>
            <Media className="list-left-thumb">
                <Media className="blackfont thum-list-img" href="#">
                    <Media object src={img_url} alt="Generic placeholder image" />
                </Media>

            </Media>
      <div className="list-right-details">
          <Media className="hdtitle">
              <a className="blackfont"> {this.props.title}</a>
          </Media>
          <p className="user-det-block icon-lib reg">Yangon,Tamil Nadu
          </p>
      </div>
  </Row>

        </div>


      )
  }
}
