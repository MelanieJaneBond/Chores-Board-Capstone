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

      constructNewChore = evt => {
        evt.preventDefault();
          const newChore = {
            activity: this.state.activity,
            materials: this.state.materials,
            date: this.state.date,
            userId: Number(sessionStorage.getItem("userId"))
          };
        this.props
            .addChore(newChore)
            .then(() => this.props.history.push("/home"));
        }

          render() {
              return (
                  <React.Fragment>
            <form>
              <h4 className="heading">New Chore :</h4>
                <div className="chore-form-div">
                    <label htmlFor="activity"></label>
                    <input type="text" id="activity" required placeholder="Title your chore..." onChange={this.handleFieldChange}/>
                </div>
                <div className="chore-form-div">
                    <label htmlFor="materials"></label>
                    <input type="text" id="materials" required placeholder="Materials..." onChange={this.handleFieldChange}/>
                </div>
                <div className="chore-form-div">
                    <label htmlFor="due-date">When would you like it done?</label>
                    <input type="date" id="date" required onChange={this.handleFieldChange}/>
                </div>
                <button onClick={this.constructNewChore}>Save</button>
            </form>
            </React.Fragment>
              )}
}