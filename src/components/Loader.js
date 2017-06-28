import React from 'react';
import {
    StyleSheet,
    Text,
} from 'react-native';
import { MKSpinner } from 'react-native-material-kit';

const styles = StyleSheet.create({
    spinner: {
        width: 50,
        height: 50,
    },
})

const Loader = () => {
    return (
        <MKSpinner style={styles.spinner} />
    )
}

export default Loader