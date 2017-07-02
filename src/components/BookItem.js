import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { getTheme } from 'react-native-material-kit';
import * as actions from '../actions';

const theme = getTheme();

const styles = StyleSheet.create({
    card: {
        marginTop: 10,
        width: 300,
        height: 200,
    }
})

const BookItem = (props) => {
    return (
        <TouchableWithoutFeedback
            onPress={() => {props.selectBook(props.book)}}
        >
            <View style={[theme.cardStyle, styles.card]}>
                <Text>{props.book.name}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default connect(null, actions)(BookItem)