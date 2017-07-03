import { StackNavigator, TabNavigator } from 'react-navigation';
import { MKColor } from 'react-native-material-kit';
import BookList from './BookList';
import SetGoal from './SetGoal';
import Stats from './Stats';

const Navigation = TabNavigator({
    SetGoal: { screen: SetGoal },
    BookList: { screen: BookList },
    Stats: { screen: Stats },
}, {
    tabBarOptions: {
        activeTintColor: MKColor.BlueGrey,
        inactiveTintColor: 'white',
        swipeEnabled: true,
        showLabel: false,
        style: {
            backgroundColor: MKColor.Amber
        }
    }
})

export default Navigation