import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import * as Icon from 'bootstrap-icons-react';

const Navbar = (props) => {
  let history = useHistory();

  const logout = (props) => {
    localStorage.removeItem("userId");
    window.confirm("Are you sure want to logout..");
    history.push("/")
  }

  return (

    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#404040" }}>

      <div className="container">
        <div className="collapse navbar-collapse" >
          <ul className="navbar-nav mr-auto">
            {/* https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/2019-01_BrandRefresh_Old-to-New-Final.gif */}
            {/* https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk-jPjXnSnCHFlgiPHWbKSYJ_Omo7-NIm3Tw&usqp=CAU */}
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk-jPjXnSnCHFlgiPHWbKSYJ_Omo7-NIm3Tw&usqp=CAU"
              style={{
                position: "relative",
                left: "-330px",
                width: "350px",
                height: "100px",
                borderRadius: "50%"
              }}
            />

            <li className="nav-item">
              {/* home button in navbar */}
              <NavLink className="nav-link" exact to="/">
                <h3 style={{
                  width: "200px",
                  height: "50px",
                  color: "black",
                  backgroundColor: "white",
                  marginTop: "20px",
                  position: "relative",
                  left: "-100px",
                  transition: "width2s"

                }} class="btn btn-default mr-2" ><Icon.HouseDoor height={30} width={30} /><b> Home </b></h3>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" exact to="/Login">
                <h3 style={{
                  width: "200px",
                  height: "50px",
                  color: "black",
                  backgroundColor: "white",
                  marginTop: "20px",
                  position: "relative",
                  left: "-100px"
                }} class="btn btn-default mr-2" ><b><Icon.People height={30} width={30} /> Login </b></h3>
              </NavLink>

            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/Signup">
                <h3 style={{
                  width: "200px",
                  height: "50px",
                  color: "black",
                  backgroundColor: "white",
                  marginTop: "20px",
                  position: "relative",
                  left: "-100px"
                }} class="btn btn-default mr-2" ><b><Icon.PersonPlus height={30} width={30} /> Signup </b></h3>
              </NavLink>

            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="">
                <h3 style={{
                  width: "40px",
                  height: "40px",
                  color: "black",
                  position: "absolute",
                  borderRadius: "50%",
                  right: "10px",
                  backgroundColor: "white",
                  marginTop: "20px",
                }} class="" onClick={logout} ><b><Icon.BoxArrowLeft height={20} width={20} /></b></h3>
              </NavLink>

            </li>
          </ul>
        </div>

      </div>
    </nav>

  );
};

export default Navbar;
