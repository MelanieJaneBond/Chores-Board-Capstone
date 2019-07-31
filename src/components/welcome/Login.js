import React, { Component } from 'react'
import "./Welcome.css"
import APImanager from '../modules/APImanager';

export default class Login extends Component {

    state = {
        username: "",
        password: ""
    }

    handleFieldChange = (event) => {
        const stateToChange = {};
        stateToChange[event.target.id] = event.target.value;
        this.setState(stateToChange)
    }

    handleLogin = (event) => {
        event.preventDefault();

    APImanager.all(this.props.users)
        .then(userList => {
        let tempUserName = userList.find(each => 
            each.username.toLowerCase() === this.state.username.toLowerCase()
            && each.password.toLowerCase() === this.state.password.toLowerCase())
        if (tempUserName) {
            sessionStorage.setItem("userId", tempUserName.id)
            this.props.onLogin();
            this.props.history.push("/home")
            } else {
                window.alert("Invalid login information. Please try again or register a new account.")
            }
            })
    }

    render() {
        return (
            <div className="card">
                <form onSubmit={this.handleLogin}>
                    <h1 className="card-header">Sign In</h1>
                    <div className="card-body">
                        <label htmlFor="userNameInput">Username: </label>
                        <input onChange={this.handleFieldChange}           type="text"
                            id="username"
                            placeholder="Username"
                            required
                            autoFocus=""
                            className="form-control mb-2"
                        />
                        <label htmlFor="passwordInput">Password: </label>
                        <input onChange={this.handleFieldChange} type="text"
                        id="password"
                        placeholder="Password"
                        required
                        className="form-control"
                        />
                    </div>
                    <div className="card-footer login-button-div">
                        <button type="submit"
                        className="btn btn-primary btn-sm login-button">Sign In</button>
                        <button type="button"
                        className="btn btn-info btn-sm login-button"
                        onClick={() => this.props.history.push("/register")}>Register New Account</button>
                    </div>
                </form>
            </div>
        )
    }
}