import React, { Component } from 'react';
import { StyleSheet, AsyncStorage, Alert, Button, View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/Foundation';
import { MKTextField, MKColor, MKButton } from 'react-native-material-kit';
import BookItem from './BookItem';
import * as actions from '../actions';
import Styles from '../styles';

const AddButton = MKButton.coloredButton()
  .withText('ADD')
  .withStyle({
    height: 52
  })
  .build()

class BookList extends Component {
  static navigationOptions = {
    tabBarLabel: 'BookList',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name={'list'}
        size={40}
        style={{ color: tintColor }}
      />
    )
  }

  constructor() {
    super()
    this.state = {
      name: '',
      author: '',
      mark: "#FFC300",
      finished: false
    }
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

  validateBook = () => {
    if (this.state.author && this.state.name) {
      this.props.addBook(this.state); // Add the new book to list
      AsyncStorage.setItem(           // Update AsyncStorage
        '@AR:Books',
        JSON.stringify([
          ...this.props.books,
          this.state
        ]));
      this.setState({      // Clear input
        ...this.state,
        name: '',
        author: ''
      })
    }
    else {
      Alert.alert(
        'Add Book',
        `Make sure there's no empty input`,
        [{
          text: 'Ok',
          style: 'cancel'
        }],
        { cancelable: true }
      )
    }
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.titleArea}>
          <Text style={Styles.title}>Book List</Text>
        </View>
        <View style={Styles.listArea}>
          {this.renderInitialView()}
        </View>
        <View style={Styles.addArea}>
          <View style={Styles.inputArea}>
            <MKTextField
              textInputStyle={Styles.inputStyles}
              placeholder={'Book name...'}
              tintColor={MKColor.Teal}
              value={this.state.name}
              onChangeText={(name) => this.setState({ ...this.state, name })}
              style={Styles.fieldStyles}
            />
            <MKTextField
              textInputStyle={Styles.inputStyles}
              placeholder={'Author...'}
              tintColor={MKColor.Teal}
              value={this.state.author}
              onChangeText={(author) => this.setState({ ...this.state, author })}
              style={Styles.fieldStyles}
            />
          </View>
          <View style={Styles.buttonArea}>
            <AddButton onPress={this.validateBook} />
          </View>
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