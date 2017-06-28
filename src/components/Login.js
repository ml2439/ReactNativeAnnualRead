import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { MKTextField, MKColor, MKButton } from 'react-native-material-kit';

// the LoginButton react component
const LoginButton = MKButton.coloredButton()
    .withText('LOGIN')
    .build()

const styles = StyleSheet.create({
    form: {
        paddingBottom: 10,
        width: 200,
    },
    fieldStyles: {
        height: 40,
        color: MKColor.Orange,
        width: 200,
    },
    loginButtonArea: {
        marginTop: 20,
    },
    errorMessage: {
        marginTop: 15,
        fontSize: 15,
        color: 'red',
        alignSelf: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
})

export default class Login extends Component {

    state = {
        email: '',
        password: '',
    }

    onButtonPress() {
        console.log('clicked button')
    }

    render() {
        const { form, fieldStyles, loginButtonArea, errorMessage, container, welcome } = styles;

        return (
            <View style={container}>
                <Text style={welcome}>
                    Welcome to Annual Read!
                </Text>
                <MKTextField
                    text={this.state.email}
                    onTextChange={email => this.setState({ email })}
                    textInputStyle={fieldStyles}
                    placeholder={'Email...'}
                    tintColor={MKColor.Teal}
                />
                <MKTextField
                    text={this.state.password}
                    onTextChange={password => this.setState({ password })}
                    textInputStyle={fieldStyles}
                    placeholder={'Password...'}
                    tintColor={MKColor.Teal}
                    password={true}
                />
                <Text style={errorMessage}>
                    {this.state.error}
                </Text>
                <View style={loginButtonArea}>
                    <LoginButton onPress={this.onButtonPress.bind(this)} />
                </View>
            </View>
        );
    }
}
