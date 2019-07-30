import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import { withRouter } from "react-router"
import CreateChoreForm from "./chore/CreateChoreForm"
import APImanager from "./modules/APImanager"
import SavedChores from "./chore/SavedChores"

export default class ApplicationViews extends Component {
    state = {
        chores: []
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
              events: choreData 
        })
    );
  }
componentDidMount() {
    const newState = {}
    fetch("http://localhost:5002/chores")
    .then(r => r.json())
    .then(chores => (newState.chores = chores))
    .then(() => this.setState(newState))
}

render() {
    return (
      <React.Fragment>
        <Route path="/home" render={props => {
            return <CreateChoreForm {...props} addChore={this.addChore} />      
        }} />
        <Route path="/home" render={props => {
            return <SavedChores {...props} chores={this.state.chores} />
        }} />
        </React.Fragment>
        )
    }
}