import React, {Component} from "react"
import "./Welcome.css"

export default class WelcomeMessage extends Component {
    render() {
        return (
        <React.Fragment>
            <section className="card bg-danger mb-3">
                <h1>The Chores Board</h1>
                    <div className="card-body">
                        <p className="card-text">Climb out of your filth and grime;</p>
                        <p className="card-text">get your chores done on time</p>
                        <p className="card-text">with <strong>The Chores Board</strong> !</p>
                        <div className="message-end">
                            <h2 className="card-title">Sign in or Create and Account :</h2>
                            <button className="btn btn-outline-dark" onClick={() => this.props.history.push(`/welcome`)}>Here</button>
                        </div>
                    </div>
            </section>
        </React.Fragment>
        )}
}

