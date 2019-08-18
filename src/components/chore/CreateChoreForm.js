import React, {Component} from 'react'
import "./Chore.css"

export default class CreateChoreForm extends Component {
    state = {
        activity: "",
        materials: "",
        date: "",
        isComplete: "",
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
            isComplete: false,
            userId: Number(sessionStorage.getItem("userId"))
          }
          
        this.props
            .addChore(newChore)
            .then(() => this.props.history.push("/home"));
        }
        
          render() {
              return (
                  <React.Fragment>
                <h2>Fill out a notecard for each chore you'd like to complete!</h2>
              <form className="form">
                <section className="card border-danger mb-3">
                  <div className="card-body">
                    <label>Title: </label>
                      <input className="form-control mb-2" type="text" id="activity" required
                      placeholder="Title your chore..." onChange={this.handleFieldChange}/>
                    <label>Materials: </label>
                      <input className="form-control mb-2" type="text" id="materials" required 
                      placeholder="List supplies or tools..." onChange={this.handleFieldChange}/>
                    <label className="message-end">When would you like it done?</label>
                      <input type="date" id="date" required onChange={this.handleFieldChange}/>
                    <div className="message-end">
                      <button className="btn btn-outline-dark" onClick={this.constructNewChore}>Save</button>
                    </div>
                  </div>
                </section>
            </form>
                </React.Fragment>
              )}
              }