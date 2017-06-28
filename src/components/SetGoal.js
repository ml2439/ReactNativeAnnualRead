import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class SetGoal extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Set Goal page</Text>
        <Text onPress={Actions.bookList}>goto</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});
