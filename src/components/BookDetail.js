import React, { Component } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import DetailView from './DetailView';
import DetailUpdate from './DetailUpdate';

class BookDetail extends Component {
    renderDetail() {
        return (this.props.updating) ?
            <DetailUpdate /> :
            <DetailView />
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderDetail()}
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        updating: state.updating,
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
})

export default connect(mapStateToProps, actions)(BookDetail);