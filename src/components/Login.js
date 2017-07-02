import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { MKTextField, MKColor, MKButton } from 'react-native-material-kit';
import firebase from 'firebase';
import Loader from './Loader';

// the LoginButton react component
const LoginButton = MKButton.coloredButton()
    .withText('LOGIN')
    .build()

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
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
})

export default class Login extends Component {

    state = {
        email: '',
        password: '',
        error: '',
        loading: false,
    }

    onButtonPress() {
        const { email, password } = this.state;
        this.setState({ error: '', loading: true })

        // Use Promises to login
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onAuthSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onAuthSuccess.bind(this))
                    .catch(this.onAuthFailed.bind(this))
            })
    }

    onAuthSuccess() {
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false,
        })
    }

    onAuthFailed() {
        this.setState({
            error: 'Authentication Failed',
            loading: false,
        })
    }

    renderLoader() {
        return (this.state.loading) ?
            <Loader /> :
            <LoginButton onPress={this.onButtonPress.bind(this)} />
    }

    render() {
        const { container, form, fieldStyles, loginButtonArea, errorMessage } = styles;

        return (
            <View style={container}>
                <View style={form}>
                    <Text>
                        Login or Create an account
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
                        {this.renderLoader()}
                    </View>
                </View>
            </View>
        );
    }
}
