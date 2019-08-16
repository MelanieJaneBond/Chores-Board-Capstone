import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"


export default class NavBar extends Component {
    render() {
        return (
                <nav className="navbar navbar-expand-lg navbar-light">
                <ul class="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/home">The Chores Board</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/completed">Completed Chores</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/welcome">Welcome</Link>
                    </li>
                    </ul>
                    <span className="navbar-text">
                        <Link className="nav-item active" onClick={() => sessionStorage.clear()} to="/">Logout</Link>
                    </span>
            </nav>
        )
    }
}