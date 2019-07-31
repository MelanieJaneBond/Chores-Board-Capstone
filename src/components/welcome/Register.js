import React, { Component } from "react"
import APImanager from "../modules/APImanager"

export default class Register extends Component {
    state = {
        username: "",
        password: ""
    }

    handleChange = (event) => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
    }

    handleRegister = (event) => {
        event.preventDefault()

        APImanager.all()
        .then(userList => {
            let isMatch = userList.find(user => user.username.toLowerCase() === this.state.username.toLowerCase())
            if(isMatch){
                window.alert("This username already exists! Please go back to login page.")
            } else if (userList.find(user => user.password.toLowerCase() === this.state.password.toLowerCase())) {
                window.alert("This password already exists") 
            } else if(this.state.username === "" || this.state.password === ""){
                window.alert("You left a field blank!")
            } else {
                let newUser = {
                    username: this.state.username,
                    password: this.state.password
                }
                this.props.registerUser(newUser)
                .then(() => APImanager.all(this.props.users))
                .then(r => r.find(user => user.username === this.state.username))
                .then(matchedUserInfo => sessionStorage.setItem("userId", matchedUserInfo.id))
                .then(() => this.props.onLogin())
                .then(() => this.props.history.push("/home"))
            }
        })
    }

    render() {
        return (
            <div className="card">
                <form>
                    <h1 className="card-header">Register New Account</h1>
                    <div className="card-body">
                        <label htmlFor="username">Username: </label>
                        <input onChange={this.handleChange} type="text"
                            id="username"
                            placeholder="Username"
                            required
                            autoFocus=""
                            className="form-control mb-2"
                        />
                        <label htmlFor="emailInput">Email: </label>
                        <input onChange={this.handleChange} type="text"
                        id="password"
                        placeholder="Password"
                        required
                        className="form-control"
                        />
                    </div>
                    <div className="card-footer login-button-div">
                        <button type="submit"
                        className="btn btn-primary btn-sm login-button"
                        onClick={this.handleRegister}>Register</button>
                        {/* <button type="button"
                        className="btn btn-danger btn-sm"
                        onClick={() => this.props.history.push("/login")}>Go Back</button> */}
                    </div>
                </form>
            </div>
        )
    }
}