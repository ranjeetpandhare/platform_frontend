import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { Button, FormGroup, Input, Label } from "reactstrap";


const AnswerDetails = (props) => {
    let history = useHistory();
    const [answer, setAnswer] = useState([]);
    const [newanswer, setnewAnswer] = useState([]);
    const [ansId, setansId] = useState("")
    const [currentUser, setCurrentUser] = useState(localStorage.getItem("userName"));
    const styleCurrentUser = { float: "right", color: "red", position: "absolute", right: "60px", top: "45px" }


    useEffect(() => {
        loadRestaurtant();
        loadAnswers();
    }, []);

    const loadAnswers = async () => {
        const res = await axios.get(`http://localhost:5000/api/v1/answer`);
        setansId((res.data.length + 1).toString())
    };


    const onSubmit = (e) => {
        e.preventDefault();
        const answerAllField = { ansText: newanswer, userId: parseInt(localStorage.getItem("userId")), postedAt: new Date().toLocaleString(), ansId: ansId, qId: props.match.params.id.toString() };
        axios.post("http://localhost:5000/api/v1/answer", answerAllField)
            .then(res => {
                history.push("/QuestionDetails")
            })
            .catch(error => {
                console.log(error);
            })
    }
    const backtoDetails = () => {
        history.push('/QuestionDetails')
    }

    const loadRestaurtant = async () => {
        const res = await axios.get(`http://localhost:5000/api/v1/question/question_answer_list/${props.match.params.id}`);
        setAnswer(res.data);
    };
    return (
        <div class="container py-0" style={{ height: "800px" }}>
            <span style={styleCurrentUser}><b> Current User: </b>{currentUser}</span>
            <hr />
            <div style={{ backgroundColor: "lightblue" }}>
                <ul className="list-group w-100" >
                    {(answer.length != 0) ? <li className="list-group-item" style={{ backgroundColor: "lightblue" }} ><b> Question : </b>{answer[0].qText}</li> : " "}
                    {(answer.length != 0) ? answer.map((detail) => <li className="list-group-item" style={{ backgroundColor: "lightblue" }}><b>Answer : </b>{detail.ansText}<div><b> Answer-by : </b>{detail.userName}</div></li>) : " NO answer yet "}
                    {(answer.length != 0) ? <li className="list-group-item" style={{ backgroundColor: "lightblue" }}><b>UserName : </b>{answer[0].userName} </li> : ""}
                    {(answer.length != 0) ? <li className="list-group-item" style={{ backgroundColor: "lightblue" }}><b>Question-Posted by : </b>{answer[0].postedAt} </li> : ""}
                </ul>
                <FormGroup>
                    <Label sm={8} size="lg"><b>Post new Answer here</b></Label>
                    <Input type="textarea"
                        placeholder="please post your answer .... "
                        value={newanswer}
                        onChange={e => { setnewAnswer(e.target.value) }}
                    />
                    <button type="submit" className="btn btn-primary" onClick={onSubmit}>Give Answer</button>
                </FormGroup>
            </div>

            <Button type="btn btn-cancal" onClick={backtoDetails}>Back</Button>
        </div>
    );
};

export default AnswerDetails;
