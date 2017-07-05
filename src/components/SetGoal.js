import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  DatePickerIOS,
} from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';
import { MKColor, MKButton } from 'react-native-material-kit';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Styles from '../styles';

const SubmitButton = MKButton.coloredButton()
  .withText('SUBMIT')
  .build()

class SetGoal extends Component {

  static navigationOptions = {
    tabBarLabel: 'SetGoal',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name={'widget'}
        size={40}
        style={{ color: tintColor }}
      />
    )
  }

  componentWillMount() {
    this.props.loadGoal();
  }

  onSubmitPress() {
    const { num, ddl } = this.props;
    this.props.setGoal({ num, ddl });
    this.props.navigation.navigate('Stats');
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.titleArea}>
          <Text style={Styles.title}>Set Goal</Text>
        </View>
        <TextInput 
          style={Styles.textField}
          placeholder={`${this.props.num} books to read`}
          onChangeText={value => this.props.formUpdateGoal({prop: 'num', value})}
        />
        <DatePickerIOS
          date={new Date(this.props.ddl)}
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

const mapStateToProps = state => {
  const { num, ddl } = state.goalReducer;
  return { num, ddl }
}

export default connect(mapStateToProps, actions)(SetGoal)