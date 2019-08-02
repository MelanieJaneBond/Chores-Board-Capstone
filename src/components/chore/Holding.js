import React, { Component } from "react"
import "./Chore.css"

export default class SavedChores extends Component {

sortingByDate = () => {
    let now = Date.now()
    let arrayOfDates = this.props.chores.map(each => { return Date.parse(each.date) })
    arrayOfDates.push(now)
    arrayOfDates.sort((a,b) => a-b)
    // This function takes today's date and places it into an array with the dates recorded by the user in his/her chores.
    // Then, it calculates the distance between today's date and each chore's date.

    let dateAfterIndex = arrayOfDates.indexOf(now) + 1
    let upComingDate = new Date(arrayOfDates[dateAfterIndex])
    // The above sets the date of the most upcoming chore in the array to the variable "upComingDate"
    let findDate = this.props.chores.find(each => Date.parse(each.date) === Date.parse(upComingDate))
    // Then, "findDate" actually searches through the array to identify that particular "most upcoming" chore.
    return findDate
}

render() {
return (
<React.Fragment>
    <section className="chore">
        <h4 className="heading">To Do List :</h4>
        {this.props.chores.map(each =>
        <div key={each.id} className="chore-card">
            <div className="chore-card-body">
                {
                    (each === this.sortingByDate()) ?
                    (<h1 className="card-title">{each.activity}</h1>) :
                    (<h5 className="card-title">{each.activity}</h5>)
                }
                <div className="chore-card">
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