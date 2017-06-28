import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import { MKSpinner } from 'react-native-material-kit';

const styles = StyleSheet.create({
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    spinner: {
        width: 50,
        height: 50,
    },
})

const Loader = () => {
    return (
        <View style={styles.loader}>
            <MKSpinner style={styles.spinner} />
        </View>
    )
}

export default Loader