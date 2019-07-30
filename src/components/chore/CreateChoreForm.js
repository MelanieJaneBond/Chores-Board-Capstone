import React, {Component} from 'react'
import "./Chore.css"

export default class CreateChoreForm extends Component {
    state = {
        activity: "",
        materials: "",
        date: "",
        userId: ""
      }

      //right now it is still intaking the userId as a string and not a number
      //lets see if we can fix that next
      
      handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
      }

      constructNewChore = inputChore => {
        inputChore.preventDefault();
          const newChore = {
            activity: this.state.activity,
            materials: this.state.materials,
            date: this.state.date,
            userId: this.state.userId
          };
        this.props
            .addChore(newChore)
            .then(() => this.props.history.push("/home"));
    }
          render() {
              return (
                  <React.Fragment>
            <form>
                <div className="chore-form-div">
                    <label htmlFor="activity">Title this Chore</label>
                    <input type="text" id="activity" required onChange={this.handleFieldChange}/>
                </div>
                <div className="chore-form-div">
                    <label htmlFor="materials">Materials Needed for this Chore</label>
                    <input type="text" id="materials" required onChange={this.handleFieldChange}/>
                </div>
                <div className="chore-form-div">
                    <label htmlFor="due-date">Do-By Date</label>
                    <input type="date" id="date" required onChange={this.handleFieldChange}/>
                </div>
                <button onClick={this.constructNewChore}>Save</button>
            </form>
            </React.Fragment>
              )}
}