import React, { Component } from "react"
import "./Chore.css"
import APImanager from "../modules/APImanager";

export default class SavedChores extends Component {

loadUsersChores = evt => {
    evt.preventDefault();
    APImanager.getChoresByUserId("userId")
    .then(choresOfUser =>
        this.setState({
          chores: choresOfUser 
    })
)
    this.props.history.push("/home")
}

render() {
return (
<React.Fragment>
    <h4 className="card-title">To Do List :</h4>
        <section className="chore">
        {this.props.chores.sort((a,b) => {
            const firstChoreInArray = Date.parse(a.date)
            const secondChoreInArray = Date.parse(b.date)
            return firstChoreInArray - secondChoreInArray
        }).map(each =>
        <div id="form" key={each.id} className="card border-warning mb-3">
            <div>
                <div>
                    <h5 className="card-title">{each.activity}</h5>
                    <h6 className="card-title">{each.materials}</h6>
                    <h6 className="card-subtitle">{each.date}</h6>
                </div>
                <button className="btn btn-primary btn-sm" onClick={() => this.props.history.push(`/edit/${each.id}`)}>Edit</button>
                <button className="btn btn-info btn-sm" onClick={() => this.props.deleteChore(each.id, each.userId)}>This Chore is DONE!</button>
            </div>
        </div>
        )}
    </section>
</React.Fragment>
)
}}

{/* <div id="form" key={each.id} className="card d-flex flex-row border-warning mb-3"> */}