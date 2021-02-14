import React, { useState, useEffect } from "react";
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { Button, Card, CardBody, CardText } from "reactstrap";


const QuestionDetails = () => {
    let history = useHistory();
    const [questionanslist, setQuestionanslist] = useState([]);
    const [currentUser, setCurrentUser] = useState(localStorage.getItem("userName"))
    const [search, setSearch] = useState('')
    const stylecurrentUser = { float: "right", color: "red", position: "absolute", right: "60px", top: "45px" };

    useEffect(() => {
        loadDataQuestion();
    }, [])
    const loadDataQuestion = async () => {

        const result = await axios.get(`http://localhost:5000/api/v1/question/question_answer_list`);
        setQuestionanslist(result.data.reverse());
    }
    const filterData = questionanslist.filter(questionans => {
        return questionans.qText.toLowerCase().includes(search.toLowerCase())
    })
    const addNewquestion = () => {
        history.push('/AddnewQuestion/Add Question')

    }

    return (
        <div className="container">
            <span style={stylecurrentUser}><b> Current User : </b>{currentUser}</span>
            <h1> <marquee>Question Answer Platform Details Page</marquee></h1>
            <Button className="btn btn-success mr-10" onClick={addNewquestion}>Add New Question</Button><br /><br />

            <input type="text"
                placeholder="Search Question ...."
                onChange={e => setSearch(e.target.value)}
                style={{ width: "80%", height: "40px" }}
            /><br /><br />
            {filterData.map((list, index) => (
                <>
                    <div>
                        <Card style={{ width: "1300px" }} >
                            <CardBody>
                                <CardText tag="h4"
                                    style={{
                                        textAlign: "left"
                                    }} >
                                    <span>{index + 1}) {list.qText}</span>
                                </CardText>
                                <hr />
                                <CardText tag="h5"
                                    style={{
                                        textAlign: "left"
                                    }}>
                                    <span>{list.ansText}</span></CardText>
                                <hr />
                                <Link class="btn btn-info text-light  w-200" to={`/AnswerDetails/${list.qId}`}>
                                    <b>Give Answer</b>
                                </Link>

                            </CardBody>
                        </Card>&nbsp;
                    </div>
                </>
            ))}
        </div>
    );
};


export default QuestionDetails;

