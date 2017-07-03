import React, { Component } from 'react';
import { StyleSheet, View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/Foundation';
import BookItem from './BookItem';
import BookDetail from './BookDetail';
import { loadInitialBooks } from '../actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 20,
  },
});

class BookList extends Component {
  static navigationOptions = {
    tabBarLabel: 'BookList',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name={'book'}
        size={50}
        style={{ color: tintColor }}
      />
    )
  }

  componentWillMount() {
    this.props.loadInitialBooks();
  }

  renderInitialView() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.dataSource = ds.cloneWithRows(this.props.books)

    return (this.props.detailView) ?
      <BookDetail /> :
      <ListView
        enableEmptySections={true}
        dataSource={this.dataSource}
        renderRow={rowData =>
          <BookItem book={rowData} />
        }
      />
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderInitialView()}
      </View>
    )
  }
}

const mapStateToProps = state => {
  const books = _.map(state.bookReducer, (val, bid) => {    // Use this bid to remove book
    return { ...val, bid }
  })
  return {
    books
  }
}

export default connect(mapStateToProps, { loadInitialBooks })(BookList)