import React, { Component } from 'react';
import { StyleSheet, Text, Button, View, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { getTheme } from 'react-native-material-kit';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import * as actions from '../actions';

const theme = getTheme();

const styles = StyleSheet.create({
    card: {
        marginTop: 10,
        height: 200,
        flexDirection: 'row',
    },
    removeButton: {
        color: '#ccc',
        padding: 10,
    },
})

const BookItem = props => {
    return (
        <View style={[theme.cardStyle, styles.card]}>
            <FoundationIcon
                name={'x'}
                size={20}
                style={styles.removeButton}
                onPress={() => props.removeBook(props.book.bid)} 
            />
            <Text>{props.book.name}</Text>
            <Button 
                title={props.book.finishDate}
                color='#666'
                onPress={() => props.toggleBook(props.book.bid)}
            />
        </View>
    )
}

export default connect(null, actions)(BookItem)