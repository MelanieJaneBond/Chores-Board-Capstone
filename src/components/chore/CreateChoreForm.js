import React, {Component} from 'react'
import "./Chore.css"

export default class CreateChoreForm extends Component {
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

      constructNewChore = evt => {
        evt.preventDefault();
          const newChore = {
            activity: this.state.activity,
            materials: this.state.materials,
            date: this.state.date,
            userId: Number(sessionStorage.getItem("userId"))
          }
          // clearInputFields = () => {
          //   let freshForm = document.querySelector("#activity").value
          //   return freshForm.innerHTML = ""
          // }
        this.props
            .addChore(newChore)
            .then(() => this.props.history.push("/home"));
        }
        
          render() {
              return (
                  <React.Fragment>
            <form>
              <div className="card text-white bg-danger mb-3">
              <h4 className="card-title">New Chore :</h4>
                <div className="card-body">
                    <input className="card-text" type="text" id="activity" required
                    placeholder="Title your chore..." onChange={this.handleFieldChange}/>
                </div>
                <div className="card-body">
                    <input className="card-text" type="text" id="materials" required placeholder="Materials..." onChange={this.handleFieldChange}/>
                </div>
                <div className="chore-card-body">
                    <label className="card-text">When would you like it done?</label>
                    <input type="date" id="date" required onChange={this.handleFieldChange}/>
                </div>
                <button onClick={this.constructNewChore}>Save</button>
                </div>
            </form>
                </React.Fragment>
              )}
              }