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

const UpdateButton = MKButton.coloredButton()
    .withText('UPDATE')
    .build()

class DetailUpdate extends Component {

    onUpdatePress() {
        const { name, note, bid } = this.props;
        this.props.saveBook({name, note, bid});
    }

    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <Text>Update book</Text>
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
                    <View style={styles.updateButton}>
                        <UpdateButton onPress={this.onUpdatePress.bind(this)} />
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
        alignItems: 'stretch',
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
    updateButton: {
        marginTop: 20,
    },
});

const mapStateToProps = state => {
    const { name, note, bid } = state;
    return { name, note, bid }
}

export default connect(mapStateToProps, actions)(DetailUpdate)