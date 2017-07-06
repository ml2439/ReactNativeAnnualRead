import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';
import { MKColor, MKButton } from 'react-native-material-kit';
import { connect } from 'react-redux';
import PieChart from 'react-native-pie-chart';
import * as actions from '../actions';
import Styles from '../styles';

const SubmitButton = MKButton.coloredButton()
  .withText('SUBMIT')
  .build()

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
    const chart_wh = 250
    const series = [123, 321]
    const sliceColor = ['#F44336','#2196F3']
 
    return (
      <View style={Styles.container}>
        <View style={Styles.titleArea}>
          <Text style={Styles.title}>Stats</Text>
        </View>

        <View>
          <Text>Deadline: {(new Date(this.props.ddl)).toLocaleDateString("en-US")}</Text>
          <Text>To read: {this.props.num}</Text>
          <Text>Books finished: {this.props.books.filter(b => b.finished).length}</Text>
          <Text>Books in total: {this.props.books.length}</Text>
        </View>
        <PieChart
            chart_wh={chart_wh}
            series={series}
            doughnut={true}
            coverRadius={0.9}
            sliceColor={sliceColor}
          />
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