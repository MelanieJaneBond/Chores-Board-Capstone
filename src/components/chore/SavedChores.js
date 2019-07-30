import React, { Component } from "react"
import "./Chore.css"

export default class SavedChores extends Component {
    state = {
        chores: []
    }

render() {
return (
<React.Fragment>
    <section className="chore">
        {this.props.chores.map(each =>
        <div key={each.id} className="chore-card">
            <div className="chore-card-body">
                <div className="chore-card-title">
                    <h5>{each.activity}</h5>
                    <h6>{each.materials}</h6>
                    <h6>{each.date}</h6>
                </div>
                <button onClick={() => this.props.history.push(`/edit/${each.id}`)}>Edit</button>
            </div>
        </div>
        )}
    </section>
</React.Fragment>
)
}}