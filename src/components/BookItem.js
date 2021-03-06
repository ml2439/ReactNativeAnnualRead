import React, { Component } from 'react';
import { Text, View, Alert } from 'react-native';
import { connect } from 'react-redux';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import Swipeout from 'react-native-swipeout';
import * as actions from '../actions';
import Styles, { Color } from '../styles';

const BookItem = props => {
    return (
        <Swipeout
            right={[
                {
                    text: 'Finish',
                    backgroundColor: Color.bookFinish,
                    onPress: () => props.toggleBook(props.book.bid),
                }
            ]}
            left={[
                {
                    text: 'Delete',
                    backgroundColor: Color.bookDelete,
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
            style={{ backgroundColor: props.book.mark, marginBottom: 2 }}
        >
            <View style={Styles.bookItem}>
                <FoundationIcon name={'book'} size={20} style={Styles.bookIcon} />
                <View style={Styles.bookInfo}>
                    <Text style={Styles.bookName}>{props.book.name}</Text>
                    <Text style={Styles.bookAuthor}>{props.book.author}</Text>
                </View>
            </View>
        </Swipeout>
    )
}

export default connect(null, actions)(BookItem)