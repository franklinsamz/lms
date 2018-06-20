import React from 'react';
import {businessServices} from "../../services";
import {Form, FormGroup, Label, Input, FormText,Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./modal.css";
export default class NewBusinessUnit extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            fields: {},
            errors: {},
            message: ''
        }
        this.toggle = this.toggle.bind(this);
    }


    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        //Name
        if(!fields["name"]){
            formIsValid = false;
            errors["name"] = "Please provide barcode number\n";
        }

        if(typeof fields["name"] !== "undefined"){
            if(!fields["name"].match(/^[a-zA-Z]+$/)){
                formIsValid = false;
                errors["name"] = "Only letters";
            }
        }

        //Email
        if(!fields["title"]){
            formIsValid = false;
            errors["title"] = "Please provide title\n";
        }

        if(!fields["address"]){
            formIsValid = false;
            errors["address"] = "Please provide address";
        }

        // if(typeof fields["email"] !== "undefined"){
        //     let lastAtPos = fields["email"].lastIndexOf('@');
        //     let lastDotPos = fields["email"].lastIndexOf('.');
        //
        //     if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
        //         formIsValid = false;
        //         errors["email"] = "Email is not valid";
        //     }
        // }
        this.setState({errors: errors});
        return formIsValid;
    }

    contactSubmit(e){
        e.preventDefault();
        if(this.handleValidation()){
            alert("Form submitted");
           console.log(this.state.fields);

            const user = {
                name: this.state.fields.name
            };
            var promiseObj = businessServices.postBusinessUnit(user);
            promiseObj.then(res => {
                console.log(res.data);
                console.log(res.data.id);
                this.setState({ message: "Sucesss" });
                this.setState({
                    modal: !this.state.modal
                });
            })
        }

        else
        {
            this.setState({ message: "error" });
        }

    }

    handleChange(field, e){
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({fields});
    }

    render(){
        return (
            <div>
                <div className="result">{ this.state.message }</div>
                <a className="btn general-btn icon-lib add-ico" id="buttonForModal1" onClick={this.toggle}>New Business Unit</a>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} >
                    <ModalHeader toggle={this.toggle}>New Business Unit</ModalHeader>
                        <form name="contactform" ref="form" method="post" className="contactform" onSubmit= {this.contactSubmit.bind(this)}>
                    <ModalBody>

                        <div className="row">
                          <div className="two columns"  >
                              <div className="pro-pic-edit-sec">
                                  <img border="0" src="https://lmsv2.labsls.com/beta/images/thumbnail-600x350.png" className="opaque-img-foradd"/>
                              </div>
                              <label for="c_thumb" className="pic-label">
                                  <span className="browse-area ">Upload Logo </span>
                              </label>
                              <div id="fileval_int">
                                  {/*<input type="file" name="c_thumb" id="c_thumb" style="display:none;"/>*/}
                              </div>
                          </div>
                            <div className="ten columns"  >

                                <div className="row">
                                    <div className="six columns control custom-box">
                                        <div className="select-box">
                                            <select id="types" name="types" className="input-text">
                                                <option value="0">Select Type</option>
                                                <option value="1">Retail</option>
                                                <option value="2">HO</option>
                                                <option value="3">Branches</option>
                                                <option value="4">Regional Offices</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div id="setparent" name="setparent"></div>
                                    <div className="six columns control custom-box">
                                        <input type="text" id="lcode" name="lcode" placeholder="Barcode Number" className="input-text" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"] || ''}/>
                                            <div className="alert-box error" id="txt1" name="txt1" >{this.state.errors["name"]}</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="twelve columns control custom-box">
                                        <input type="text" id="lgname" name="title" placeholder="Title" className="input-text" onChange={this.handleChange.bind(this, "title")} value={this.state.fields["title"] || ''}/>
                                            <div className="alert-box error" id="txt2" name="txt2" >{this.state.errors["title"]}</div>

                                    </div>
                                </div>

                                <div className="row">
                                    <div className="twelve columns control custom-box">
                                        <textarea  type="text" id="descr" name="address" placeholder="address" className="input-text" onChange={this.handleChange.bind(this, "title")} value={this.state.fields["address"] || ''}></textarea>
                                        <div className="alert-box error" id="txt3" name="txt3" >{this.state.errors["address"]}</div>
                                    </div>
                                </div>

                                <div className="row">

                                    <div className="six columns control custom-box" id="divcount">
                                        <div className="select-box">
                                            <select id="country" name="country" className="input-text">
                                                <option value="0">Select Country</option>
                                                <option value="1">Myanmar</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="six columns control custom-box" id="divste">
                                        <div className="select-box">
                                            <select id="state" name="state" className="input-text">
                                                <option value="0">Select State</option>
                                                <option value="1">Ayeyarwady</option>
                                                <option value="2">Mandalay</option>
                                                <option value="3">Bago</option>
                                                <option value="4">Sagaing</option>
                                                <option value="5">Yangon</option>
                                            </select>
                                        </div>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="six columns control custom-box">

                                        <input type="text" id="phone" name="phone" placeholder="Phone Number" className="input-text"/>

                                    </div>
                                </div>
                                <div className="row">
                                    <label>Select Region</label>
                                    <div className="twelve  control custom-box">
                                        <input id="bustype" type="radio" name="c_group" value="2" /> Mandalay
                                        <input id="bustype" type="radio" name="c_group" value="3" /> Yangon
                                    </div>
                                </div>






                             {/*<div className="col-md-6">*/}
                                 {/*<fieldset>*/}
                                    {/*<input refs="name" type="text" size="30" placeholder="Name" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"] || ''}/>*/}
                                    {/*<span className="error">{this.state.errors["name"]}</span>*/}
                                    {/*<br/>*/}
                                    {/*<input refs="email" type="text" size="30" placeholder="Email" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"] || ''}/>*/}
                                    {/*<span className="error">{this.state.errors["email"]}</span>*/}
                                    {/*<br/>*/}
                                    {/*<input refs="phone" type="text" size="30" placeholder="Phone" onChange={this.handleChange.bind(this, "phone")} value={this.state.fields["phone"] || ''}/>*/}
                                    {/*<br/>*/}
                                    {/*<input refs="address" type="text" size="30" placeholder="Address" onChange={this.handleChange.bind(this, "address")} value={this.state.fields["address"] || ''}/>*/}
                                    {/*<br/>*/}
                                 {/*</fieldset>*/}
                            {/*</div>*/}
                            {/*<div className="col-md-6">*/}
                                {/*<fieldset>*/}
                           {/*<textarea refs="message" cols="28" rows="10"*/}
                                {/*className="comments" placeholder="Message" onChange={this.handleChange.bind(this, "message")}>{this.state.fields["message"] }</textarea>*/}
                                {/*</fieldset>*/}
                            {/*</div>*/}


                            </div>
                        </div>

                    </ModalBody>
                    <ModalFooter>
                        <Button color="btn btn-lg pro" id="submit" value="Submit">Send Message</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                    </form>
                </Modal>
            </div>
        )
    }
}
