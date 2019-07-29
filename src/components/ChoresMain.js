import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import "./ChoresMain.css";
import "bootstrap/dist/css/bootstrap.min.css"

export default class ChoresMain extends Component {
//isAuthenticated = () => sessionStorage.getItem("userId") !== null

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ApplicationViews />
      </React.Fragment>
    );
  }

}
