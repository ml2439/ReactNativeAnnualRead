import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';

export default class SetGoal extends Component {
  static navigationOptions = {
    tabBarLabel: 'SetGoal',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name={'flag'}
        size={50}
        style={{ color: tintColor }}
      />
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Set Goal page</Text>
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
