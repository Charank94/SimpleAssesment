import React, { Component } from 'react';
import './App.css';
import SingleUser from '../src/Components/SingleUser';
import Users from '../src/Containers/Users'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { connect } from 'react-redux';
import axios from 'axios';
import CreateUser from './Components/CreateUser';


class App extends Component {

  componentDidMount() {
    axios.get('https://reqres.in/api/users')
      .then(response => {
        this.props.getUsers(response.data.data)
      })

  }

  render() {


    return (
      <BrowserRouter>
        <div className="App">
          <h2>USERS APPLICATION</h2>
    

          <Switch>
            <Route exact path='/' component={Users}></Route>
            <Route path='/create' component={CreateUser}></Route>
            <Route path='/:id' component={SingleUser}></Route>
          </Switch>
          

        </div>
      </BrowserRouter>

    );
  }



}

function mapDispatchToProps(dispatch) {
  return {
    getUsers: function (res) {
      dispatch({ type: 'users', res })
    }
  }
}

export default connect(null, mapDispatchToProps)(App);





