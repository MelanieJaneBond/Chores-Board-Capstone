import React, {Component} from "react"
import "./Welcome.css"

export default class WelcomeMessage extends Component {
    render() {
        return (
        <React.Fragment>
            <section className="chore">
                <h1 className="heading">The Chores Board</h1>
                    <div className="chore-card-body">
                        <div className="chore-card">
                            <p>Climb out of your filth and grime;</p>
                            <p>get your chores done on time with <strong>The Chores Board</strong> !</p>
                        </div>
                        <h5>Sign in or Create and Account :</h5>
                        <button onClick={() => this.props.history.push(`/welcome`)}>Here</button>
                    </div>
            </section>
        </React.Fragment>
        )}
}