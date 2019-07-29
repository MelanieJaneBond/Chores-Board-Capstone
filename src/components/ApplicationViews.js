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

componentDidMount() {
    const newState = {}
    .then(() => APImanager.all("chores") )
    .then(chores => (newState.chores = chores))
    .then(() => this.setState(newState))
}

render() {
    return (
      <React.Fragment>
        <Route exact path="/home" render={props => {
            return ( <SavedChores {...props} chores={this.state.chores} />)    
        }} />
        </React.Fragment>
        )
    }
}