import React, { Component } from "react"
import "./Chore.css"
import APImanager from "../modules/APImanager";

export default class SavedChores extends Component {
    state = {
        chores: []
    }

    // componentDidMount() {
    // APImanager.all(chores).then(choresData => {this.setState({ choresData })
    // })
    // }

render() {
return (
<React.Fragment>
    <section className="chore">
        {this.props.chores.map(each =>
        <div key={each.id} className="chore-card" style="width 18rem">
            <div className="chore-card-body">
                <div className="chore-card-title">
                    <h5>{each.activity}</h5>
                    <h6>{each.materials}</h6>
                    <p>{each.date}</p>
                </div>
            </div>
        </div>
        )}
    </section>
</React.Fragment>
)
}}