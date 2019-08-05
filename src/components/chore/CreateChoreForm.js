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
              <h4 className="card-title"> Make a New Chore or View what you've got To-Do :</h4>
                <section id="form" className="card border-danger mb-3">
                <div className="card-body">
                    <input className="card-title" type="text" id="activity" required
                    placeholder="Title your chore..." onChange={this.handleFieldChange}/>
                    <input className="card-title" type="text" id="materials" required 
                    placeholder="List supplies or tools..." onChange={this.handleFieldChange}/>
                    <label className="card-subtitle">When would you like it done?</label>
                    <input type="date" id="date" required onChange={this.handleFieldChange}/>
                </div>
                <button id="saver" className="btn btn-outline-dark btn-sm" onClick={this.constructNewChore}>Save</button>
                </section>
            </form>
                </React.Fragment>
              )}
              }