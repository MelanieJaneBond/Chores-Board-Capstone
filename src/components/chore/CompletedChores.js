import React, { Component } from "react"
import "./Chore.css"
import APImanager from "../modules/APImanager";

export default class CompletedChores extends Component {

// loadUsersCompletedChores = evt => {
//     evt.preventDefault();
//     APImanager.getCompletedTrueChores("userId")
//     .then(choresOfUser =>
//         this.setState({
//           chores: choresOfUser 
//     })
// )
//     this.props.history.push("/completed")
// }


render() {
return (
<React.Fragment>
        <section className="chore">
        {this.props.chores.filter(them => {
        if (them.isComplete === true) {
            return them
        }}).sort((a,b) => {
            const firstChoreInArray = Date.parse(a.date)
            const secondChoreInArray = Date.parse(b.date)
            return firstChoreInArray - secondChoreInArray
        }).map(each =>
        <div key={each.id} className="card border-warning mb-3">
            <div className="card-body">
                <div>
                    <h5 id="big-words" className="card-title">{each.activity}</h5>
                    <h6 className="card-text">{each.materials}</h6>
                    <h6 className="card-text">{each.date}</h6>
                </div>
                <section className="clickies">
                    <button className="btn btn-outline-dark" onClick={() => this.props.deleteChore(each.id, each.userId)}>Delete</button>
                </section>
            </div>
        </div>
        )}
    </section>
    <h2>Now that you're DONE, do something FUN!</h2>
</React.Fragment>
)
}}