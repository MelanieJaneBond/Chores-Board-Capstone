import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import { withRouter } from "react-router"
import CreateChoreForm from "./chore/CreateChoreForm"
import APImanager from "./modules/APImanager"
import SavedChores from "./chore/SavedChores"
import EditChoreForm from "./chore/EditChoreForm"
import Register from "./welcome/Register"

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
      return APImanager.delete("chores", id)
      .then(() => APImanager.all("chores")
      .then(chores => {
        this.setState({
          chores: chores
        })
    }))
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
        <Route path="/welcome" render={props => {
            return <Register {...props} users={this.state.users} onLogin={this.onLogin} registerUser={this.registerUser} />
        }} />

        <Route path="/home" render={props => {
            if (this.isAuthenticated()) {
              return <CreateChoreForm {...props} addChore={this.addChore} />
            } else {
              return <Redirect to="/welcome" />     
        }}} />

        <Route path="/home" render={props => {
             if (this.isAuthenticated()) {
              return <SavedChores {...props} chores={this.state.chores} deleteChore={this.deleteChore}/>
            } else {
              return <Redirect to="/welcome" />     
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