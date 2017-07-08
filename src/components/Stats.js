import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Styles, { Color, WIDTH } from '../styles';

class Stats extends Component {

  static navigationOptions = {
    title: 'Stats',
  }

  componentWillMount() {
    this.props.loadGoal();
  }

  render() {
    const deadline = (new Date(this.props.ddl)).toLocaleDateString("en-US")
    const toRead = this.props.num
    const bookFinished = this.props.books.filter(b => b.finished).length
    const percentFinished = Math.floor(bookFinished / toRead * 100)

    const MSPERDAY = 1000 * 60 * 60 * 24
    const timeLeft = (new Date(this.props.ddl)).getTime() - Date.now()
    const daysLeft = Math.ceil(timeLeft / MSPERDAY)
    const daysPerBook = Math.ceil(daysLeft / (toRead - bookFinished))

    const barWidth = WIDTH * 0.8
    const barWidthInner = barWidth * percentFinished * 0.01 - 4
    return (
      <View style={Styles.container}>
        <TouchableHighlight
          onPress={() => this.props.navigation.navigate('SetGoal')}
        >
          <View style={Styles.goalBar}>
            <Icon
              name={'flag'}
              size={20}
              style={[Styles.bookIcon, { color: Color.inactive }]}
            />
            <View style={Styles.barInfo}>
              <Text style={Styles.barText}>Read</Text>
              <Text style={Styles.goalBarNum}>{toRead}</Text>
              <Text style={Styles.barText}>books by</Text>
              <Text style={Styles.goalBarNum}>{deadline}</Text>
              <Text style={Styles.barText}>Set ></Text>
            </View>
          </View>
        </TouchableHighlight>
        <ScrollView>
          <View style={Styles.section}>
            <Text style={Styles.label}>Books finished/total:</Text>
            <Text style={[Styles.goalBarNum, { color: 'black' }]}>
              {bookFinished}/{toRead}
            </Text>
            <View style={[Styles.percentBar, { width: barWidth }]}>
              <View style={[Styles.percentBarInner, { width: barWidthInner }]}>
              </View>
            </View>
          </View>
          <View style={Styles.section}>
            <Text style={Styles.label}>Days left:</Text>
            <Text style={[Styles.goalBarNum, { color: 'black' }]}>
              {daysLeft}
            </Text>
          </View>
          <View style={Styles.section}>
            <Text style={Styles.label}>Read 1 book every</Text>
            <Text style={[Styles.goalBarNum, { color: 'black' }]}>
              {(daysPerBook > 0) ? daysPerBook : 0}
            </Text>
            <Text style={Styles.label}>days to achieve your goal</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { num, ddl } = state.goalReducer;
  const books = state.bookReducer;
  return { num, ddl, books }
}

export default connect(mapStateToProps, actions)(Stats)