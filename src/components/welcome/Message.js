import React, {Component} from "react"
import "./Welcome.css"

export default class WelcomeMessage extends Component {
    render() {
        return (
        <React.Fragment>
            <form className="form">
            <section className="card bg-danger mb-3">
                <h1 className="message-end">The Chores Board</h1>
                    <div className="card-body">
                        <div id="middle-words">
                        <p>Climb out of your filth and grime;</p>
                        <p>get your chores done on time</p>
                        <p>with <strong>The Chores Board</strong> !</p>
                        </div>
                        <div className="message-end">
                            <h3 className="card-title">Sign in or Create an Account :</h3>
                            <button className="btn btn-outline-dark" onClick={() => this.props.history.push(`/welcome`)}>Here</button>
                        </div>
                    </div>
            </section>
            </form>
        </React.Fragment>
        )}
}

