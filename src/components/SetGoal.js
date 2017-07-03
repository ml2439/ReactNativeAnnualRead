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

class SetGoal extends Component {

  static navigationOptions = {
    tabBarLabel: 'SetGoal',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name={'widget'}
        size={50}
        style={{ color: tintColor }}
      />
    )
  }

  onSubmitPress() {
    const { num, ddl } = this.props;
    this.props.setGoal({ num, ddl });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Set Goal page</Text>
        <TextInput 
          style={styles.fieldStyles}
          placeholder={`${this.props.num} books to read`}
          onChangeText={value => this.props.formUpdateGoal({prop: 'num', value})}
        />
        <DatePickerIOS
          date={this.props.ddl}
          mode='date'
          onDateChange={value => this.props.formUpdateGoal({ prop: 'ddl', value })}
        />
        <View>
          <SubmitButton onPress={this.onSubmitPress.bind(this)} />
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
  fieldStyles: {
    height: 40,
    color: MKColor.DeepPurple,
  },
});

const mapStateToProps = state => {
  const { num, ddl } = state.goalReducer;
  return { num, ddl }
}

export default connect(mapStateToProps, actions)(SetGoal)