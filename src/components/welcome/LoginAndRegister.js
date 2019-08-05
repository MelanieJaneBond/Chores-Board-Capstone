import React, { Component } from "react"
import APImanager from "../modules/APImanager"
import "./Welcome.css"

export default class Register extends Component {
    state = {
        username: "",
        password: ""
    }

    handleFieldChange = (event) => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
    }

    handleLogin = (event) => {
        event.preventDefault();

    APImanager.all("users")
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

    handleRegister = (event) => {
        event.preventDefault()
        
        APImanager.all("users")
        .then(userList => {
            let isMatch = userList.find(each => each.username.toLowerCase() === this.state.username.toLowerCase())
            if(isMatch){
                window.alert("This username already exists! Please go back to login page.")
            } else if (userList.find(each => each.password.toLowerCase() === this.state.password.toLowerCase())) {
                window.alert("This password already exists") 
            } else if(this.state.username === "" || this.state.password === "") {
                window.alert("You left a field blank!")
            } else {
                let newUser = {
                    username: this.state.username,
                    password: this.state.password
                }
                this.props.registerUser(newUser)
                .then(() => APImanager.all("users"))
                .then(r => r.find(user => user.username === this.state.username))
                .then(matchedUserInfo => sessionStorage.setItem("userId", matchedUserInfo.id))
                .then(() => this.props.onLogin())
                .then(() => this.props.history.push("/home"))
            }
        })
    }
    
    render() {
    return (
        <section className="form">
            <div className="card">
                <form onSubmit={this.handleLogin}>
                    <h1 className="message-end">Sign In</h1>
                    <div className="card-body">
                        <label className="sign-in">Username: </label>
                        <input onChange={this.handleFieldChange} type="text"
                            id="username"
                            required
                            autoFocus=""
                            className="form-control mb-2"
                        />
                        <label className="sign-in">Password: </label>
                        <input onChange={this.handleFieldChange} type="text"
                        id="password"
                        required
                        className="form-control"
                        />
                    </div>
                    <div className="card-footer login-button-div">
                        <button className="btn btn-primary login-button"
                        onClick={this.handleLogin}>Sign In</button>
                        <button id="reg" className="btn btn-info login-button"
                        onClick={this.handleRegister}>Register New Account</button>
                    </div>
                </form>
            </div>
        </section>
    )
}}