import React, { Component } from 'react';
import { Text, View, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/EvilIcons';
import { MKColor, MKButton } from 'react-native-material-kit';
import { connect } from 'react-redux';
import PieChart from 'react-native-pie-chart';
import * as actions from '../actions';
import Styles, { Color } from '../styles';

const SubmitButton = MKButton.coloredButton()
  .withText('SUBMIT')
  .build()

const { height, width } = Dimensions.get('window');

class Stats extends Component {

  static navigationOptions = {
    tabBarLabel: 'Stats',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name={'flag'}
        size={40}
        style={{ color: tintColor }}
      />
    )
  }

  componentWillMount() {
    this.props.loadGoal();
  }

  render() {
    const deadline = (new Date(this.props.ddl)).toLocaleDateString("en-US")
    const toRead = this.props.num
    const bookFinished = this.props.books.filter(b => b.finished).length
    const percentFinished = Math.floor(bookFinished / toRead * 100) + '%'

    const MSPERDAY = 1000 * 60 * 60 * 24
    const timeLeft = (new Date(this.props.ddl)).getTime() - Date.now()
    const daysLeft = Math.ceil(timeLeft / MSPERDAY)
    const daysPerBook = Math.ceil(daysLeft / (toRead - bookFinished))

    const chart_wh = width * 0.3
    // const series = [123, 321]
    const series = [parseInt(bookFinished, 10), parseInt(toRead, 10)]
    const sliceColor = [Color.bookFinish, Color.bookNew]

    return (
      <View style={Styles.container}>
        <View style={Styles.titleArea}>
          <Text style={Styles.title}>Stats</Text>
        </View>

        <View style={Styles.goalBar}>
          <Icon
            name={'flag'}
            size={20}
            style={[Styles.bookIcon, {color: Color.inactive}]}
          />
          <View style={Styles.bookInfo}>
            <Text style={Styles.barText}>Read</Text>
            <Text style={Styles.goalBarNum}>{toRead}</Text>
            <Text style={Styles.barText}>books by</Text>
            <Text style={Styles.goalBarNum}>{deadline}</Text>
          </View>
          <FontAwesome
            name={'chevron-right'}
            size={25}
            style={[Styles.bookIcon, {color: Color.inactive}]}
            onPress={() => this.props.navigation.navigate('SetGoal')}
          />
        </View>
        <ScrollView>
          <View style={Styles.section}>
            <Text style={Styles.label}>Books finished/total:</Text>
            <Text style={[Styles.goalBarNum, { color: 'black' }]}>
              {bookFinished}/{toRead}
            </Text>
            <PieChart
              chart_wh={chart_wh}
              series={series}
              coverRadius={0.9}
              sliceColor={sliceColor}
              style={Styles.pieChart}
            />
            <Text style={[Styles.goalBarNum, { color: 'black' }]}>
              {percentFinished}
            </Text>
          </View>
          <View style={Styles.section}>
            <Text style={Styles.label}>Days left:</Text>
            <Text style={[Styles.goalBarNum, { color: 'black' }]}>
              {daysLeft}
            </Text>
          </View>
          <View style={Styles.section}>
            <Text style={Styles.label}>Read 1 book every</Text>
            <Text style={[Styles.goalBarNum, { color: 'black' }]}>{daysPerBook}</Text>
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