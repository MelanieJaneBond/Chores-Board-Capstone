import React, { Component } from "react"
import "./Chore.css"

export default class SavedChores extends Component {

// sortingByDate = () => {
//     let now = Date.now()
//     let arrayOfDates = this.props.chores.map(each => { return Date.parse(each.date) })
//     arrayOfDates.push(now)
//     arrayOfDates.sort((a,b) => a-b)
//     arrayOfDates.forEach(one => {


// })

render() {
return (
<React.Fragment>
    <section className="chore">
        <h4 className="heading">To Do List :</h4>
        {this.props.chores.sort((a,b) => {
            const firstChoreInArray = Date.parse(a.date)
            const secondChoreInArray = Date.parse(b.date)
            return secondChoreInArray - firstChoreInArray
        }).map(each =>
        <div key={each.id} className="chore-card">
            <div className="chore-card-body">
                <div className="chore-card">
                    <h5>{each.activity}</h5>
                    <h6>{each.materials}</h6>
                    <h6>{each.date}</h6>
                </div>
                <button onClick={() => this.props.history.push(`/edit/${each.id}`)}>Edit</button>
                <button onClick={() => this.props.deleteChore(each.id)}>This Chore is DONE!</button>
            </div>
        </div>
        )}
    </section>
</React.Fragment>
)
}}