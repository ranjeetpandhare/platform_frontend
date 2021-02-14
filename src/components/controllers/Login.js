
import React, { useState } from "react";
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import * as Icon from 'bootstrap-icons-react';

const Login = () => {
    let history = useHistory();
    const [userName, setuserName] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(userName, " ", password, " ");
        axios.get(`http://localhost:5000/api/v1/signup/${userName}`)
            .then(res => {
                if (res.data[0].password == password) {
                    localStorage.setItem("userId", res.data[0].userId);
                    localStorage.setItem("userName", userName)
                    history.push(`/QuestionDetails`);
                }
                else {
                    alert("IncorrectPassword")
                }
            })
            .catch(error => {
                alert("Username doesnot exist");
            })
    };

    return (
        <div className="container" style={{ height: "800px" }}>
            <div className="py-4"  >
                <Form className="w-50  mx-auto shadow p-5" >
                    <h1><Icon.PersonCircle height={50} width={50} /> Login </h1>

                    {/* username field  */}
                    <FormGroup>
                        <Label>UserName</Label>
                        <Input type="text"
                            name="username"
                            required
                            maxLength={"50"}
                            id="exampleEmail"
                            value={userName}
                            onChange={e => { setuserName(e.target.value) }}
                            placeholder="Enter UserName "
                        />
                        <Label >Password</Label>
                        <Input type="password"
                            name="password1"
                            required
                            maxLength={"20"}
                            id="examplePassword"
                            value={password}
                            onChange={e => { setPassword(e.target.value) }}
                            placeholder="Enter Password"
                        />
                    </FormGroup>

                    <Button type="submit" className="btn btn-success mr-2" onClick={e => onSubmit(e)}>Log In</Button>
                    <Link to={'/'}>
                        <Button type="cancel" className="btn btn-danger mr-2">Cancel</Button>
                    </Link>
                </Form>
            </div>
        </div>
    )
}




export default Login;


