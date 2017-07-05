import React, { Component } from 'react';
import { StyleSheet, Text, Button, View, Alert } from 'react-native';
import { connect } from 'react-redux';
import { getTheme } from 'react-native-material-kit';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import Swipeout from 'react-native-swipeout';
import * as actions from '../actions';

const theme = getTheme();

const styles = StyleSheet.create({
    card: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
    },
    removeButton: {
        color: '#ccc',
        padding: 10,
    },
    bookInfo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bookName: {
        fontStyle: 'italic',
        fontSize: 16,
        paddingBottom: 6,
        color: '#444',
    },
    bookAuthor: {
        color: '#555',
        paddingTop: 6,
        paddingRight: 10,
    },
})


const BookItem = props => {
    return (
        <Swipeout
            right={[
                {
                    text: 'Finish',
                    onPress: () => props.toggleBook(props.book.bid),
                    backgroundColor: '#00BAAD',
                }
            ]}
            autoClose={true}
            style={{backgroundColor: props.book.mark}}
        >
            <View>
                <FoundationIcon
                    name={'x'}
                    size={20}
                    style={styles.removeButton}
                    onPress={() => Alert.alert(
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
                    )}
                />
                <View style={styles.bookInfo}>
                    <Text style={styles.bookName}>{props.book.name}</Text>
                    <Text style={styles.bookAuthor}>{props.book.author}</Text>
                </View>
            </View>
        </Swipeout>
    )
}

export default connect(null, actions)(BookItem)