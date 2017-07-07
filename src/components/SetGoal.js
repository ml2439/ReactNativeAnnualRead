import React, { Component } from 'react';
import { Text, View, DatePickerIOS } from 'react-native';
import { MKTextField, MKColor, MKButton } from 'react-native-material-kit';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Styles, { Color } from '../styles';

const SubmitButton = MKButton.coloredButton()
  .withText('SUBMIT')
  .build()

class SetGoal extends Component {
  static navigationOptions = {
    title: 'Set Goal',
  }

  componentWillMount() {
    this.props.loadGoal();
  }

  onSubmitPress() {
    const { num, ddl } = this.props;
    this.props.setGoal({ num, ddl });
    this.props.navigation.goBack(null);
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.inputArea}>
          <View style={Styles.section}>
            <Text style={Styles.label}>Number of Books</Text>
            <MKTextField
              textInputStyle={Styles.inputStyles}
              placeholder={`${this.props.num} books to read`}
              tintColor={MKColor.Teal}
              onChangeText={value => this.props.formUpdateGoal({ prop: 'num', value })}
              style={Styles.fieldStyles}
            />
          </View>
          <View style={Styles.section}>
            <Text style={Styles.label}>Deadline</Text>
            <DatePickerIOS
              style={Styles.fieldStyles}
              date={new Date(this.props.ddl)}
              mode='date'
              onDateChange={value => this.props.formUpdateGoal({ prop: 'ddl', value })}
            />
          </View>
          <View>
            <SubmitButton onPress={this.onSubmitPress.bind(this)} />
          </View>
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