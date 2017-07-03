// import React, { Component } from 'react';
// import { StyleSheet, View, Text, ListView } from 'react-native';
// import { connect } from 'react-redux';
// import _ from 'lodash';
// import Icon from 'react-native-vector-icons/Foundation';
// import BookItem from './BookItem';
// import BookDetail from './BookDetail';
// import { loadInitialBooks } from '../actions';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
// });

// class BookList extends Component {
//     static navigationOptions = {
//         tabBarLabel: 'BookList',
//         tabBarIcon: ({ tintColor }) => (
//             <Icon 
//                 name={'book'}
//                 size={50}
//                 style={{ color: tintColor }}
//             />
//         )
//     }

//     componentWillMount() {
//         this.props.loadInitialBooks();
//     }

//     renderInitialView() {
//         const ds = new ListView.DataSource({
//             rowHasChanged: (r1, r2) => r1 !== r2
//         })
//         this.dataSource = ds.cloneWithRows(this.props.books)

//         return (this.props.detailView)? 
//             (
//                 <BookDetail />
//             ) 
//             :
//             (
//                 <ListView
//                     enableEmptySections={true}
//                     dataSource={this.dataSource}
//                     renderRow={rowData =>
//                         <BookItem book={rowData} />}
//                 />
//             )
//     }

//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text>adsf</Text>
//             </View>
//         )
//     }
// }

// const mapStateToProps = state => {
//     const books = _.map(state.books, (val, bid) => {    // Use this bid to remove book
//         return { ...val, bid }
//     })
//     return {
//         books,
//         detailView: state.detailView,
//     }
// }

// export default connect(mapStateToProps, {loadInitialBooks})(BookList)

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';

export default class BookList extends Component {
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
  render() {
    return (
      <View style={styles.container}>
        <Text>BookList page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
