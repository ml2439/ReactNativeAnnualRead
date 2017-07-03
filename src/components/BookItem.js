import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { getTheme } from 'react-native-material-kit';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import * as actions from '../actions';

const theme = getTheme();

const styles = StyleSheet.create({
    card: {
        marginTop: 10,
        width: 300,
        height: 200,
    },
    listItem: {
        height: 50
    }
})

const BookItem = props => {
    return (
        <View style={styles.listItem}>
            <Text>{props.book.name}</Text>
            <FoundationIcon
                name={'x'}
                size={20}
                style={{color: '#ccc'}}
                onPress={() => props.removeBook(props.book.bid)} 
            />
        </View>
    )
}

export default connect(null, actions)(BookItem)