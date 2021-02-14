import React, { useState } from "react";
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import * as Icon from 'bootstrap-icons-react';

const Signup = () => {
    let history = useHistory();
    const [fname, setfName] = useState('');
    const [lname, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [userName, setuserName] = useState('');
    const [password, setPassword] = useState('');


    const formValidation = () => {
        if (fname.length === 0) {
            alert("please enter First Name");
            return false;
        }
        else if (lname.length === 0) {
            alert("please enter Last name")
            return false;
        }
        else if (email.length === 0) {
            alert("please enter email address ")
            return false;
        }
        else if (!email.match(/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/)) {
            alert("please enter valid email address")
            return false;
        } else if (phone.length === 0) {
            alert("please enter phone number")
            return false;
        }
        else if (!phone.match(/[7-9][0-9]{9}$/)) {
            alert("please enter valid phone number")
            return false;
        }
        else if (address.length == 0) {
            alert("please enter address")
            return false;
        }
        else if (userName.length === 0) {
            alert("please enter username")
            return false;
        }
        else if (password.length == 0) {
            alert("please enter password")
            return false;
        } else {
            return true;
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const isvalid = formValidation();
        const allDataField = { fname: fname, lname: lname, email: email, phone: phone, address: address, userName: userName, password: password }
        if (isvalid) {
            axios.post("http://localhost:5000/api/v1/signup", allDataField)
                .then(res => {
                    alert("New user add successfully.. ");
                    history.push("/Login");
                })
                .catch(error => {
                    console.log(error);
                })
        }
    };

    return (
        <div className="container" style={{ height: "100%" }} >
            <div className="py-4"  >
                <Form className="w-50 mx-auto shadow p-5" >
                    <h1><Icon.PersonPlus height={50} width={50} /> Register </h1>
                    <FormGroup>
                        <Input type="text"
                            name="fname"
                            value={fname}
                            onChange={e => { setfName(e.target.value) }}
                            placeholder="Enter First Name "
                        />&nbsp;
                        <Input type="text"
                            name="lname"
                            value={lname}
                            onChange={e => { setLName(e.target.value) }}
                            placeholder="Enter Last Name "
                        />&nbsp;
                        <Input type="text"
                            name="email"
                            value={email}
                            onChange={e => { setEmail(e.target.value) }}
                            placeholder="Enter Email "
                        />&nbsp;
                        <Input type="number"
                            name="phone"
                            value={phone}
                            onChange={e => { setPhone(e.target.value) }}
                            placeholder="Enter Phone Number "
                        />&nbsp;
                        <Input type="textarea"
                            name="address"
                            value={address}
                            onChange={e => { setAddress(e.target.value) }}
                            placeholder="Enter Full Address "
                        />&nbsp;
                        <Input type="text"
                            name="userName"
                            value={userName}
                            onChange={e => { setuserName(e.target.value) }}
                            placeholder="Enter username "
                        />&nbsp;
                        <Input type="password"
                            name="password"
                            value={password}
                            onChange={e => { setPassword(e.target.value) }}
                            placeholder="Enter Password"
                        />
                    </FormGroup>

                    <Button type="sumbit" className="btn btn-success" onClick={onSubmit}>Register</Button>
                </Form>
            </div>
        </div >
    )
}




export default Signup;


