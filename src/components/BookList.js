import React, { Component } from 'react';
import { StyleSheet, View, ListView } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Foundation';
import BookItem from './BookItem';

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
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })
        this.dataSource = ds.cloneWithRows(this.props.books)
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.dataSource}
                    renderRow={rowData =>
                        <BookItem book={rowData} />}
                />
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        books: state.books
    }
}

export default connect(mapStateToProps)(BookList)