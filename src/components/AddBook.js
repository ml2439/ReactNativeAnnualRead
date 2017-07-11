import React, { Component } from 'react';
import { View, Text, AsyncStorage, Alert } from 'react-native';
import { MKTextField, MKColor, MKButton } from 'react-native-material-kit';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as actions from '../actions';
import Styles, { Color } from '../styles';

const AddButton = MKButton.coloredButton()
    .withText('ADD')
    .build()

class AddBook extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            author: '',
            mark: Color.bookNew,
            finished: false
        }
    }

    onAddPress() {
        if (this.state.author && this.state.name) {
            this.props.addBook(this.state); // Add the new book to list

            AsyncStorage.setItem(           // Update AsyncStorage
                '@AR:Books',
                JSON.stringify([
                    ...this.props.books,
                    this.state
                ]));
                
            this.setState({      // Clear input
                ...this.state,
                name: '',
                author: ''
            })

            this.props.navigation.goBack(null); // Back to book list
        }
        else {
            Alert.alert(
                'Add Book',
                `Make sure there's no empty input.`,
                [{
                    text: 'Ok',
                    style: 'cancel'
                }],
                { cancelable: true }
            )
        }
    }

    render() {
        return (
            <View style={Styles.container}>
                <View style={Styles.inputArea}>
                    <View style={Styles.section}>
                        <Text style={Styles.label}>Book Name</Text>
                        <MKTextField
                            textInputStyle={Styles.inputStyles}
                            placeholder={'Book name...'}
                            tintColor={Color.bookNew}
                            value={this.state.name}
                            onChangeText={(name) => this.setState({ ...this.state, name })}
                            style={Styles.fieldStyles}
                        />
                    </View>
                    <View style={Styles.section}>
                        <Text style={Styles.label}>Author</Text>
                        <MKTextField
                            textInputStyle={Styles.inputStyles}
                            placeholder={'Author...'}
                            tintColor={Color.bookNew}
                            value={this.state.author}
                            onChangeText={(author) => this.setState({ ...this.state, author })}
                            style={Styles.fieldStyles}
                        />
                    </View>
                    <AddButton onPress={this.onAddPress.bind(this)} />
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
    const books = _.map(state.bookReducer, (val, bid) => {    // Use this bid to remove book
        return { ...val, bid }
    })
    return { books }
}

export default connect(mapStateToProps, actions)(AddBook)