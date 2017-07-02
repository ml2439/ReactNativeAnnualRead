import React, { Component } from 'react';
import { StyleSheet, View, ListView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/Foundation';
import BookItem from './BookItem';
import BookDetail from './BookDetail';
import { loadInitialBooks } from '../actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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

        return (this.props.detailView)? 
            (
                <BookDetail />
            ) 
            :
            (
                <ListView
                    enableEmptySections={true}
                    dataSource={this.dataSource}
                    renderRow={rowData =>
                        <BookItem book={rowData} />}
                />
            )
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
    const books = _.map(state.books, (val, uid) => {
        return { ...val, uid }
    })
    return {
        books,
        detailView: state.detailView,
    }
}

export default connect(mapStateToProps, {loadInitialBooks})(BookList)