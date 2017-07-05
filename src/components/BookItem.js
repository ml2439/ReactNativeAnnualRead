import React, { Component } from 'react';
import { StyleSheet, Text, Button, View, Alert } from 'react-native';
import { connect } from 'react-redux';
import { getTheme } from 'react-native-material-kit';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import Swipeout from 'react-native-swipeout';
import * as actions from '../actions';

const theme = getTheme();

const BookItem = props => {
    return (
        <Swipeout
            right={[
                {
                    text: 'Finish',
                    backgroundColor: '#00BAAD',
                    onPress: () => props.toggleBook(props.book.bid),
                }
            ]}
            left={[
                {
                    text: 'Delete',
                    backgroundColor: 'red',
                    onPress: () => Alert.alert(
                        'Remove Book',
                        `Sure you want to remove: ${props.book.name}?`,
                        [
                            {
                                text: 'Yes',
                                onPress: () => props.removeBook(props.book.bid)
                            },
                            {
                                text: 'Cancel',
                                style: 'cancel'
                            },
                        ],
                        { cancelable: true }
                    )
                }
            ]}
            autoClose={true}
            style={{ backgroundColor: props.book.mark }}
        >
            <View style={styles.bookInfo}>
                <FoundationIcon name={'book'} size={20} style={styles.bookIcon}/>
                <Text style={styles.bookName}>{props.book.name}</Text>
                <Text style={styles.bookAuthor}>{props.book.author}</Text>
            </View>
        </Swipeout>
    )
}

const styles = StyleSheet.create({
    removeButton: {
        color: '#ccc',
        padding: 10,
    },
    bookInfo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
    },
    bookIcon: {
        color: '#ccc',
        padding: 10,
    },
    bookName: {
        fontStyle: 'italic',
        fontSize: 15,
        paddingBottom: 5,
        color: '#444',
    },
    bookAuthor: {
        color: '#555',
        paddingTop: 5,
        paddingRight: 10,
    },
})

export default connect(null, actions)(BookItem)