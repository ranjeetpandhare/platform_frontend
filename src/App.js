import React, { useState } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/controllers/HomePage";
import Login from "./components/controllers/Login";
import QuestionDetails from "./components/controllers/QuestionDetails";
import AnswerDetails from "./components/controllers/AnswerDetails";
import AddnewQuestion from "./components/controllers/AddnewQuestion";
import NotFound from "./components/error page/NotFound";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GloablStyle } from "./components/theme/themes.js";
import Signup from "./components/controllers/Signup";
import * as Icon from 'bootstrap-icons-react';
import Footer from "./components/layout/Footer";

const styleApp = styled.div;


function App(props) {
  const [theme, setTheme] = useState("light");


  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GloablStyle />
      <Router>
        <div className="App">
          <Navbar />
          <button onClick={() => themeToggler()}
            style={{ position: "relative", top: "-80px", right: "-460px", width: "180px", height: "50px", color: "black", backgroundColor: "white" }}
            className="btn btn-default"><Icon.Gear height={30} width={30} /> <b>Change Theme</b></button>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/QuestionDetails" component={QuestionDetails} />
            <Route exact path="/AnswerDetails/:id" component={AnswerDetails} />
            <Route exact path="/AddnewQuestion/:id" component={AddnewQuestion} />
            <Route exact path="/Signup" component={Signup} />
            <Route component={NotFound} />
          </Switch>
          <hr />
          <Footer />
        </div>
      </Router>
    </ThemeProvider>

  );
}

export default App;
