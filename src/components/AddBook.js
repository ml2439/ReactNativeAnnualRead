import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';
import { MKTextField, MKColor, MKButton } from 'react-native-material-kit';
import { connect } from 'react-redux';
import * as actions from '../actions';

const AddButton = MKButton.coloredButton()
    .withText('ADD')
    .build()

class AddBook extends Component {
    static navigationOptions = {
        tabBarLabel: 'AddBook',
        tabBarIcon: ({ tintColor }) => (
            <Icon
                name={'plus'}
                size={50}
                style={{ color: tintColor }}
            />
        )
    }

    onAddPress() {
        const { name, note } = this.props;
        this.props.createNewBook({name, note});
        this.props.navigation.navigate('BookList');
    }

    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <Text>Add a new book</Text>
                    <MKTextField
                        textInputStyle={styles.fieldStyles}
                        placeholder={'Book name...'}
                        tintColor={MKColor.Teal}
                        value={this.props.name}
                        onChangeText={value => this.props.formUpdate({ prop: 'name', value })}
                    />
                    <MKTextField
                        textInputStyle={styles.fieldStyles}
                        placeholder={'Note...'}
                        tintColor={MKColor.Teal}
                        value={this.props.note}
                        onChangeText={value => this.props.formUpdate({ prop: 'note', value })}
                    />
                    <View style={styles.addButton}>
                        <AddButton onPress={this.onAddPress.bind(this)} />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

// issue: if use alignItems: 'center' in container, won't see the MKTextField
// https://github.com/xinthink/react-native-material-kit/issues/177
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'space-between',
        backgroundColor: '#F5FCFF',
    },
    fieldStyles: {
        height: 40,
        color: MKColor.Orange,
    },
    addButton: {
        marginTop: 20,
    },
});

const mapStateToProps = state => {
    const { name, note } = state;
    return { name, note }
}

export default connect(mapStateToProps, actions)(AddBook)