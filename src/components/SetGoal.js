import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  DatePickerIOS,
} from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';
import { MKTextField, MKColor, MKButton } from 'react-native-material-kit';
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

  constructor() {
    super();
    this.state = {
      date: new Date()
    }
  }

  onDateChange() {
    this.setState({
      date
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Set Goal page</Text>
        <MKTextField
          textInputStyle={styles.fieldStyles}
          placeholder={'Number to read...'}
          tintColor={MKColor.Teal}
          value={this.props.num}
          onChangeText={value => this.props.formUpdate({ prop: 'num', value })}
        />
        <DatePickerIOS
          date={this.state.date}
          mode='date'
          onDateChange={this.onDateChange} />
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
    color: MKColor.Orange,
  },
});

const mapStateToProps = state => {
  const { num, ddl } = state;
  return { num, ddl }
}

export default connect(mapStateToProps, actions)(SetGoal)