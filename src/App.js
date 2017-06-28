import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import firebase from 'firebase';
import Login from './components/Login';

export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBezdzOymH8LNlXCj7Yo85DMdooP2_KbeU",
      authDomain: "annualread.firebaseapp.com",
      databaseURL: "https://annualread.firebaseio.com",
      projectId: "annualread",
      storageBucket: "",
      messagingSenderId: "761878318473"
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
