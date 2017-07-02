import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import * as actions from '../actions';

class BookDetail extends Component {

    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false} >
                <FoundationIcon 
                    name={'x'} 
                    size={20}
                    onPress={() => this.props.noneSelected()} />
                <Text>{this.props.book.name}</Text>
                <Text>{this.props.book.note}</Text>
                <FoundationIcon 
                    name={'trash'} 
                    size={30}
                    onPress={() => this.props.removeBook(this.props.book.bid)} />
            </ScrollView>
        );
    }
}

const mapStateToProps = state => {
    return {
        book: state.bookSelected,
    }
}

export default connect(mapStateToProps, actions)(BookDetail);