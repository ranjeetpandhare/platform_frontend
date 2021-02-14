import React, { useState, useEffect } from "react";
import axios from 'axios';
import * as Icon from 'bootstrap-icons-react';


const HomePage = () => {
    const [questionanslist, setQuestionanslist] = useState([]);
    const [search, setSearch] = useState('')

    const searchDiv = { position: 'relative', display: 'inline-block' }
    const tableWidth = { width: "1300px" }
    const questionText = { width: "400px", textAlign: "left", fontFamily: "Arial" }
    const answerText = { textAlign: "left", fontFamily: "Arial" }

    useEffect(() => {
        loadDataQuestion();
    }, [])

    const loadDataQuestion = async () => {
        const result = await axios.get("http://localhost:5000/api/v1/question/question_answer_list_homepage");
        setQuestionanslist(result.data.reverse());
    }
    const filterData = questionanslist.filter(questionans => {
        return questionans.qText.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <div>
            <div className="container"  >
                <div className="py-6"  >
                    <h1 style={{ color: "#0fd0f5" }}>Question Answer List</h1>

                    <div style={searchDiv}>
                        <input type="text" placeholder="Search Question ...." onChange={e => setSearch(e.target.value)} size="100" style={{ height: "40px" }} />&nbsp;
                        <Icon.Search height={30} width={30} />
                    </div><br /><br />

                    <table class="table border shadow" style={tableWidth}>
                        <thead class="thead-gray" >
                            {/* Home page coloumn name */}
                            <tr style={{ textAlign: "left" }}>
                                <th scope="col"><h2><b>#</b></h2></th>
                                <th scope="col"><h2><b>Question</b></h2></th>
                                <th scope="col"><h2><b>Username</b></h2></th>
                                <th scope="col"><h2><b>Answer</b></h2></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* to iterate the data from map function  */}
                            {filterData.map((list, index) => (
                                <tr style={{ color: "black" }}>
                                    <th scope="row">{index + 1}</th>
                                    <td style={questionText}><h4>{list.qText}</h4></td>
                                    <td><h6>{list.userName}</h6></td>
                                    <td style={answerText}><h5>{list.ansText}</h5></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};


export default HomePage;
