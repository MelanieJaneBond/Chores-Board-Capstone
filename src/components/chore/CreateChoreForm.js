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
            // clearInputFields()
        }
        

          render() {
              return (
                  <React.Fragment>
            <form>
              <h4 className="heading">New Chore :</h4>
                <div className="chore-form-div">
                    <label htmlFor="activity"></label>
                    <input type="text" id="activity" required placeholder="Title your chore..."
                    ref={el => this.inputActivity = el} onChange={this.handleFieldChange}/>
                </div>
                <div className="chore-form-div">
                    <label htmlFor="materials"></label>
                    <input type="text" id="materials" required placeholder="Materials..." 
                    ref={el => this.inputMaterials = el} onChange={this.handleFieldChange}/>
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