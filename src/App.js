import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Login from './components/Login';
import Loader from './components/Loader';
import Navigation from './Navigation';
// import BookList from './components/BookList';
import reducers from './reducers/bookReducer';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default class App extends Component {
  // a local state
  state = {
    loggedIn: null,
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBezdzOymH8LNlXCj7Yo85DMdooP2_KbeU",
      authDomain: "annualread.firebaseapp.com",
      databaseURL: "https://annualread.firebaseio.com",
      projectId: "annualread",
      storageBucket: "",
      messagingSenderId: "761878318473"
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          loggedIn: true
        })
      } else {
        this.setState({
          loggedIn: false
        })
      }
    })
  }

  renderInitialView() {
    switch (this.state.loggedIn) {
      case true:
        return <Navigation />
      case false:
        return <Login />
      default:
        return <Loader />
    }
  }

  render() {
    return (
      <Provider store={store}>
        {this.renderInitialView()}
      </Provider>
    );
  }
}
