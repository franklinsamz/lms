import React from 'react';
import axios from 'axios';
import {businessServices} from "../../services";
import {Form, FormGroup, Label, Input, FormText,Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
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
            errors["name"] = "Cannot be empty";
        }

        if(typeof fields["name"] !== "undefined"){
            if(!fields["name"].match(/^[a-zA-Z]+$/)){
                formIsValid = false;
                errors["name"] = "Only letters";
            }
        }

        //Email
        if(!fields["email"]){
            formIsValid = false;
            errors["email"] = "Cannot be empty";
        }

        if(typeof fields["email"] !== "undefined"){
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["email"] = "Email is not valid";
            }
        }
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
                <a className="btn general-btn icon-lib add-ico" id="buttonForModal1" onClick={this.toggle}>New User</a>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <form name="contactform" ref="form" method="post" className="contactform" onSubmit= {this.contactSubmit.bind(this)}>
                    <div className="col-md-6">
                        <fieldset>
                            <input refs="name" type="text" size="30" placeholder="Name" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"] || ''}/>
                            <span className="error">{this.state.errors["name"]}</span>
                            <br/>
                            <input refs="email" type="text" size="30" placeholder="Email" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"] || ''}/>
                            <span className="error">{this.state.errors["email"]}</span>
                            <br/>
                            <input refs="phone" type="text" size="30" placeholder="Phone" onChange={this.handleChange.bind(this, "phone")} value={this.state.fields["phone"] || ''}/>
                            <br/>
                            <input refs="address" type="text" size="30" placeholder="Address" onChange={this.handleChange.bind(this, "address")} value={this.state.fields["address"] || ''}/>
                            <br/>
                        </fieldset>
                    </div>
                    <div className="col-md-6">
                        <fieldset>
                   <textarea refs="message" cols="28" rows="10"
                        className="comments" placeholder="Message" onChange={this.handleChange.bind(this, "message")}>{this.state.fields["message"] }</textarea>
                        </fieldset>
                    </div>
                    <div className="col-md-12">
                        <fieldset>
                            <button className="btn btn-lg pro" id="submit" value="Submit">Send Message</button>
                        </fieldset>
                    </div>
                </form>
                </Modal>
            </div>
        )
    }
}
