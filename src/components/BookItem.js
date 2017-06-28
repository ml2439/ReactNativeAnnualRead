import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
        <View style={[theme.cardStyle, styles.card]}>
            <Text>{props.book.name}</Text>
        </View>
    )
}

export default connect(null, actions)(BookItem)