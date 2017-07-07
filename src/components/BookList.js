import React, { Component } from 'react';
import { StyleSheet, AsyncStorage, Alert, Button, View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/EvilIcons';
import { MKTextField, MKButton } from 'react-native-material-kit';
import BookItem from './BookItem';
import * as actions from '../actions';
import Styles, { Color } from '../styles';

const AddButton = MKButton.coloredButton()
  .withText('ADD')
  .withStyle({
    height: 52,
  })
  .build()

class BookList extends Component {
  static navigationOptions = {
    title: 'Book List'
  }

  componentWillMount() {
    this.props.loadInitialBooks();
  }

  renderInitialView() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.dataSource = ds.cloneWithRows(this.props.books)

    return (
      <ListView
        enableEmptySections={true}
        dataSource={this.dataSource}
        renderRow={rowData =>
          <BookItem book={rowData} />
        }
      />
    )
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.goalBar}>
          <Icon
            name={'book'}
            size={20}
            style={[Styles.bookIcon, { color: Color.inactive }]}
          />
          <View style={[Styles.bookInfo, { paddingRight: 0 }]}>
            <Text style={Styles.barText}>Total:</Text>
            <Text style={Styles.goalBarNum}>{this.props.books.length}</Text>
            <Text style={Styles.barText}>books</Text>
            <Text style={Styles.barText}>Add More</Text>
          </View>
          <FontAwesome
            name={'chevron-right'}
            size={25}
            style={[Styles.bookIcon, { color: Color.inactive }]}
            onPress={() => this.props.navigation.navigate('AddBook')}
          />
        </View>

        <View style={Styles.listArea}>
          {this.renderInitialView()}
        </View>
      </View >
    )
  }
}

const mapStateToProps = state => {
  const books = _.map(state.bookReducer, (val, bid) => {    // Use this bid to remove book
    return { ...val, bid }
  })
  return { books }
}

export default connect(mapStateToProps, actions)(BookList)