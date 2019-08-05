import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"


export default class NavBar extends Component {
    render() {
        return (
                <nav className="navbar navbar-light">
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <Link className="nav-link" to="/home">The Chores Board</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/welcome">Welcome</Link>
                    </li>
                </ul>
                <Link className="mr-1" onClick={() => sessionStorage.clear()} to="/">Logout</Link>
            </nav>
        )
    }
}