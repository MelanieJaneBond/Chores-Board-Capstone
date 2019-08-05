import React, {Component} from 'react'
import "./Chore.css"
import APImanager from '../modules/APImanager';

//let userId = parseInt(sessionStorage.getItem("userId"))
export default class EditChoreForm extends Component {
    state = {
        activity: "",
        materials: "",
        date: "",
        userId: ""
      }
    
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
      }
    
    editForm = evt => {
        evt.preventDefault()
        const editedChore = {
            id: parseInt(this.props.match.params.choresId),
            activity: this.state.activity,
            materials: this.state.materials,
            date: this.state.date,
            userId: Number(sessionStorage.getItem("userId"))
        }
    this.props
        .editForm(editedChore)
        //the ".editForm" function is being called from APPVIEWS. After it exocutes, the activity will come back here
        //and after it does the "edit form" activity, you want it to re-insert the list of chores into the DOM using
        //this.props.history.push
        //You used to have this part in APPVIEWS inside the edit call but really you need it to happen AFTER that.
        .then(() => this.props.history.push("/home"))
    }

    deleteChore = evt => {
        evt.preventDefault()
        this.props.deleteChore(parseInt(this.props.match.params.choresId))
        .then(() => this.props.history.push("/home"))
    }

componentDidMount() {
    APImanager.get("chores", this.props.match.params.choresId)
    .then(each => {
        this.setState ({
        activity: each.activity,
        materials: each.materials,
        date: each.date,
        userId: each.userId
    })})}
//this.props.match.params is a reference to the parameter inside the URL
//you're telling javascript to match the parameter in the URL and call it "choresId"

render() {
    return (
        <React.Fragment>
            <form className="form">
                <section className="card border-danger mb-3">
                    <div className="card-body">
                        <input type="text" id="activity" required placeholder="Title your chore..." value={this.state.activity} onChange={this.handleFieldChange}/>
                        <input type="text" id="materials" required placeholder="List supplies or tools..." value={this.state.materials} onChange={this.handleFieldChange}/>
                        <label>When would you like it done?</label>
                        <input type="date" id="date" required value={this.state.date} onChange={this.handleFieldChange}/>
                    </div>
                    <button id="saver" className="btn btn-outline-dark btn-sm" onClick={this.editForm}>Save</button>
                </section>
            </form>
        </React.Fragment>
)
}}
