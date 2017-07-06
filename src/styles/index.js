import { StyleSheet } from 'react-native';

export const Color = {
    background: '#3F51B5',
    lightBackground: 'rgba(63,81,181,0.1)',
    inactive: 'rgba(255,255,255,0.5)',
    percentFinish: '#fdcb4e',
    percentTotal: '#c83652',
    bookNew: '#00BAAD',
    bookFinish: '#FFC300',
    bookDelete: '#f01c4a',
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: 20,
        backgroundColor: Color.inactive,
    },
    titleArea: {
        height: 40,
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Avenir-Black',
        color: '#666',
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
    },
    fieldStyles: {
        marginBottom: 0,
        paddingTop: 5,
        borderRadius: 3,
        backgroundColor: Color.lightBackground,
    },
    inputStyles: {
        height: 20,
        color: 'darkred',
    },
    inputArea: {
        flex: 1,
        marginLeft: 5,
        marginRight: 5,
    },
    buttonArea: {
        alignSelf: 'stretch',
        marginRight: 5,
    },
    // button: {        // custom made Text-->Button
    //   color: 'white',
    //   fontSize: 20,
    //   padding: 13,
    //   borderWidth: 2,
    //   borderRadius: 5,
    //   alignSelf: 'stretch',
    //   textAlign: 'center',
    // },

    /*************** For SetGoal ***************/
    inputStylesNum: {
        height: 30,
        color: 'darkred',
        fontSize: 25,
    },
    label: {
        fontSize: 16,
    },
    inputSection: {
        marginBottom: 20,
    },
    /*************** For Stats ***************/
    section: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 4,
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: Color.lightBackground,
    },
    goalBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Color.background,
        height: 50,
    },
    barText: {
        color: Color.inactive,
        fontSize: 16,
        alignSelf: 'center',
    },
    goalBarNum: {
        fontSize: 28,
        color: 'white',
        alignSelf: 'center',
        fontFamily: 'Futura',
    },
    pieChart: {
        marginTop: 20,
    },
    /*************** For BookItem ***************/
    bookItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
    },
    bookInfo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 10,
    },
    bookIcon: {
        color: Color.inactive,
        padding: 10,
        alignSelf: 'center',
    },
    bookName: {
        fontSize: 18,
        fontFamily: 'Iowan Old Style',
        paddingBottom: 5,
        color: '#444',
    },
    bookAuthor: {
        fontFamily: 'Cochin-Italic',
        color: '#555',
        alignSelf: 'flex-end',
    },

});

export default Styles


// font family
// https://github.com/react-native-training/react-native-fonts


        // <Text style={{ fontFamily: 'American Typewriter' }}>American Typewriter</Text>
        // <Text style={{ fontFamily: 'Apple SD Gothic Neo' }}>Apple SD Gothic Neo</Text>
        // <Text style={{ fontFamily: 'Avenir' }}>Avenir</Text>
        // <Text style={{ fontFamily: 'Baskerville' }}>Baskerville</Text>
        // <Text style={{ fontFamily: 'Bodoni 72' }}>Bodoni 72</Text>
        // <Text style={{ fontFamily: 'Bradley Hand' }}>Bradley Hand</Text>
        // <Text style={{ fontFamily: 'Chalkboard SE' }}>Chalkboard SE</Text>
        // {/*<Text style={{ fontFamily: 'Chalkduster' }}>Chalkduster</Text>*/}
        // <Text style={{ fontFamily: 'Cochin' }}>Cochin</Text>
        // <Text style={{ fontFamily: 'Copperplate' }}>Copperplate</Text>
        // <Text style={{ fontFamily: 'Courier' }}>Courier</Text>
        // <Text style={{ fontFamily: 'Damascus' }}>Damascus</Text>
        // {/*<Text style={{ fontFamily: 'Didot' }}>Didot</Text>*/}
        // {/*<Text style={{ fontFamily: 'DiwanMishafi' }}>DiwanMishafi</Text>*/}
        // {/*<Text style={{ fontFamily: 'Euphemia UCAS' }}>Euphemia UCAS</Text>*/}
        // {/*<Text style={{ fontFamily: 'Farah' }}>Farah</Text>*/}
        // <Text style={{ fontFamily: 'Futura' }}>Futura</Text>
        // {/*<Text style={{ fontFamily: 'Geeza Pro' }}>Geeza Pro</Text>*/}
        // <Text style={{ fontFamily: 'Gill Sans' }}>Gill Sans</Text>
        // {/*<Text style={{ fontFamily: 'Gujarati Sangam MN' }}>Gujarati Sangam MN</Text>*/}
        // <Text style={{ fontFamily: 'Gurmukhi MN' }}>Gurmukhi MN</Text>
        // {/*<Text style={{ fontFamily: 'Helvetica' }}>Helvetica</Text>*/}
        // {/*<Text style={{ fontFamily: 'Hiragino Sans' }}>Hiragino Sans</Text>*/}
        // <Text style={{ fontFamily: 'Hoefler Text' }}>Hoefler Text</Text>
        // <Text style={{ fontFamily: 'Iowan Old Style' }}>Iowan Old Style</Text>
        // {/*<Text style={{ fontFamily: 'Kailasa' }}>Kailasa</Text>*/}
        // {/*<Text style={{ fontFamily: 'Kannada Sangam MN' }}>Kannada Sangam MN</Text>*/}
        // <Text style={{ fontFamily: 'Kohinoor Bangla' }}>Kohinoor Bangla</Text>
        // {/*<Text style={{ fontFamily: 'Malayalam Sangam MN' }}>Malayalam Sangam MN</Text>*/}
        // <Text style={{ fontFamily: 'Marker Felt' }}>Marker Felt</Text>
        // <Text style={{ fontFamily: 'Helvetica' }}>Helvetica</Text>


