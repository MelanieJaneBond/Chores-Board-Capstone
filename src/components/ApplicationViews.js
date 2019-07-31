import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import { withRouter } from "react-router"
import CreateChoreForm from "./chore/CreateChoreForm"
import APImanager from "./modules/APImanager"
import SavedChores from "./chore/SavedChores"
import EditChoreForm from "./chore/EditChoreForm"
import Register from "./welcome/Register"
import Login from "./welcome/Login"

export default class ApplicationViews extends Component {
  state = {
      chores: [],
      users: [],
      userId: ""
  }
    
  componentDidMount() {
    let currentUserId = sessionStorage.getItem("userId")
    this.loadAllData(currentUserId)
  }
  
  loadAllData = (currentUserId) => {
    const newState = {}
    APImanager.get("chores", currentUserId)
      .then(chores => (newState.chores = chores))
      .then(() => APImanager.all(this.state.users))
      .then(users => (newState.users = users))
      .then(() => this.setState(newState))
  }

  getChores = (chores) => {
    APImanager.all(chores)
    .then(choresData => this.setState({chores: choresData}))
  }


  addChore = (choreObj) => {
    return APImanager.post("chores", choreObj)
        .then(() => APImanager.all("chores"))
        .then(choreData =>
            this.setState({
              chores: choreData 
        })
    );
  }

  editForm = (choreToEdit) => {
    return APImanager.put("chores", choreToEdit)
      .then(() => APImanager.all("chores")
      .then(chores => {
        this.setState({
          chores: chores
        })
      }))
  }

  deleteChore = (id) => {
      return APImanager.delete("chores", parseInt(id))
      .then(() => APImanager.all("chores")
      .then(chores => {
        this.setState({
          chores: chores
        })
    }))
  }


  onLogin = () => {
    this.setState ({
      userId: sessionStorage.getItem("userId")
    })
    this.loadAllData(this.state.userId)
   }

render() {
    return (
      <React.Fragment>
        <Route path="/welcome" render={props => {
            return <Login {...props} />
        }} />
        <Route path="/welcome" redner={props => {
            return <Register {...props} />
        }} />
        <Route path="/home" render={props => {
            return <CreateChoreForm {...props} addChore={this.addChore} />      
        }} />
        <Route path="/home" render={props => {
            return <SavedChores {...props} chores={this.state.chores} users={this.state.users} deleteChore={this.deleteChore}/>
        }} />
        <Route
          exact path="/edit/:choresId(\d+)" render={props => {
              let chosenChore = this.state.chores.find(one => one.id === parseInt(props.match.params.choresId))
            return <EditChoreForm {...props} chores={chosenChore} editForm={this.editForm} deleteChore={this.deleteChore} />
          }} />
        </React.Fragment>
        )
    }
}