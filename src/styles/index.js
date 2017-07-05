import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: 20,
        backgroundColor: '#fab6b7',
    },
    titleArea: {
        height: 40,
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
    },
    textField: {
        height: 40,
        color: 'purple',
    },
    listArea: {
        flex: 1
    },
    addArea: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        backgroundColor: '#f1989e',
        borderWidth: 5,
        borderColor: '#f1989e'
    },
    fieldStyles: {
        marginBottom: 0,
        paddingTop: 5,
        backgroundColor: '#ffd500',
    },
    inputStyles: {
        height: 20,
        color: 'darkred',
    },
    inputArea: {
        flex: 1,
        paddingRight: 5,
    },
    buttonArea: {
        alignSelf: 'stretch',
    },
    // button: {
    //   color: 'white',
    //   fontSize: 20,
    //   padding: 13,
    //   borderWidth: 2,
    //   borderRadius: 5,
    //   alignSelf: 'stretch',
    //   textAlign: 'center',
    // },

});

export default Styles