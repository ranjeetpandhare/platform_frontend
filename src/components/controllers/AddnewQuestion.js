import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FormGroup, Input } from 'reactstrap';

//add new Question data 
const AddnewQuestion = (props) => {
    let history = useHistory();
    const [question, setQuestion] = useState('');
    const [currentUser, setCurrentUser] = useState(localStorage.getItem("userName"))

    const mystyle = {
        float: "right", color: "red", position: "absolute", right: "60px", top: "45px"
    }



    //submit data post data from serverside
    const onSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/v1/question/add", { userId: parseInt(localStorage.getItem("userId")), qId: props.match.params.id.toString(), qText: question, postedAt: new Date().toLocaleString() })
            .then(res => {
                history.push("/QuestionDetails");
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="container" style={{ height: "800px" }}>
            <span style={mystyle}><b> Current User: </b>{currentUser}</span>
            <div className="w-50 mx-auto shadow p-1 mb-5" style={{ color: "black" }}>
                <h2 className="text-center mb-4" style={{ color: "#06a1bf" }}>Add New Question</h2>
                <form>

                    <FormGroup>
                        <Input
                            type='textarea' name="Question"
                            value={question}
                            placeholder="Enter Your Question"
                            onChange={e => { setQuestion(e.target.value) }} /><br />
                        <button type="submit" className="btn btn-primary btn-block" onClick={onSubmit} >Add Question</button>
                    </FormGroup>


                    <Link to={'/QuestionDetails'}><button type="submit" className="btn btn-danger btn-block">Cancel</button></Link>
                </form>
            </div>
        </div>
    );
};


export default AddnewQuestion;