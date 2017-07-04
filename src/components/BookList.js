import React, { Component } from 'react';
import { StyleSheet, Alert, View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/Foundation';
import { MKTextField, MKColor, MKButton } from 'react-native-material-kit';
import BookItem from './BookItem';
import * as actions from '../actions';

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
  addButton: {
    marginTop: 20,
  },
});

const AddButton = MKButton.coloredButton()
  .withText('ADD')
  .build()

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
      this.props.addBook(this.state);
    } else {
      Alert.alert(
        'Add Book',
        `Make sure there's no empty input`,
        [
          {
            text: 'Ok',
            style: 'cancel'
          },
        ],
        { cancelable: true }
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderInitialView()}
        <Text>Swipe Left to Finish a Book</Text>

        <Text>Add a Book</Text>
        <MKTextField
          textInputStyle={styles.fieldStyles}
          placeholder={'Book name...'}
          tintColor={MKColor.Teal}
          value={this.state.name}
          onChangeText={(name) => this.setState({ ...this.state, name })}
        />
        <MKTextField
          textInputStyle={styles.fieldStyles}
          placeholder={'Author...'}
          tintColor={MKColor.Teal}
          value={this.state.author}
          onChangeText={(author) => this.setState({ ...this.state, author })}
        />
        <View style={styles.addButton}>
          <AddButton onPress={this.validateBook} />
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