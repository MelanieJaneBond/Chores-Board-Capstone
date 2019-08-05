import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import { withRouter } from "react-router"
import CreateChoreForm from "./chore/CreateChoreForm"
import APImanager from "./modules/APImanager"
import SavedChores from "./chore/SavedChores"
import EditChoreForm from "./chore/EditChoreForm"
import Register from "./welcome/LoginAndRegister"
import WelcomeMessage from "./welcome/Message"

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
    APImanager.getChoresByUserId("chores", currentUserId)
      .then(chores => {
        console.log(chores)
        return newState.chores = chores
      })
      .then(() => this.setState(newState))
  }

  addChore = (choreObj) => {
    return APImanager.post("chores", choreObj)
        .then(() => APImanager.getChoresByUserId("chores", choreObj.userId))
        .then(choresOfUser =>
            this.setState({
              chores: choresOfUser 
        })
    )
  }

  // clearInputFields = () => {
  //   let freshForm = document.querySelector("#activity").value
  //   return freshForm.innerHTML = ""
  // }

  editForm = (choreToEdit) => {
    return APImanager.put("chores", choreToEdit)
      .then(() => APImanager.getChoresByUserId("chores", choreToEdit.userId)
      .then(chores => {
        this.setState({
          chores: chores
        })
      }))
  }

  deleteChore = (id, userId) => {
      return APImanager.removeAndList("chores", id, userId)
        .then(choresOfUser => {
          this.setState({
            chores: choresOfUser
          })
        })
      }

  registerUser = (userToRegister) => {
    return APImanager.post("users", userToRegister)
    .then(() => APImanager.all("users"))
    .then(users => this.setState({
      users: users
    }))
    }

  onLogin = () => {
    this.setState ({
      userId: sessionStorage.getItem("userId")
    })
    this.loadAllData(this.state.userId)
   }

   isAuthenticated = () => sessionStorage.getItem("userId") !== null

render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={props => {
          return <WelcomeMessage {...props} />
        }} />

        <Route path="/welcome" render={props => {
            return <Register {...props} users={this.state.users} onLogin={this.onLogin} registerUser={this.registerUser} />
        }} />

        <Route path="/home" render={props => {
            if (this.isAuthenticated()) {
              return <CreateChoreForm {...props} addChore={this.addChore} />
            } else {
              return <Redirect to="/" />     
        }}} />

        <Route path="/home" render={props => {
             if (this.isAuthenticated()) {
              return <SavedChores {...props} chores={this.state.chores} deleteChore={this.deleteChore} />
            } else {
              return <Redirect to="/" />     
        }}} />

        <Route
          exact path="/edit/:choresId(\d+)" render={props => {
              let chosenChore = this.state.chores.find(one => one.id === parseInt(props.match.params.choresId))
            return <EditChoreForm {...props} chores={chosenChore} editForm={this.editForm} deleteChore={this.deleteChore} />
          }} />
        </React.Fragment>
        )
    }
}