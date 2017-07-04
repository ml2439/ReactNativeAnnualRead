import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  DatePickerIOS,
} from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';
import { MKColor, MKButton } from 'react-native-material-kit';
import { connect } from 'react-redux';
import * as actions from '../actions';

const SubmitButton = MKButton.coloredButton()
  .withText('SUBMIT')
  .build()

class Stats extends Component {

  static navigationOptions = {
    tabBarLabel: 'Stats',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name={'flag'}
        size={50}
        style={{ color: tintColor }}
      />
    )
  }

  componentWillMount() {
    this.props.loadGoal();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Stats</Text>

        <View>
          <Text>Deadline: {this.props.ddl.toString()}</Text>
          <Text>To read: {this.props.num}</Text>
          <Text>Books finished: {this.props.books.filter(b => b.finished).length}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 20,
  },
});

const mapStateToProps = state => {
  const { num, ddl } = state.goalReducer;
  const books = state.bookReducer;
  return { num, ddl, books }
}

export default connect(mapStateToProps, actions)(Stats)