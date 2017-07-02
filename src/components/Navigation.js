import { StackNavigator, TabNavigator } from 'react-navigation';
import { MKColor } from 'react-native-material-kit';
import BookList from './BookList';
import SetGoal from './SetGoal';

const Navigation = TabNavigator({
    BookList: { screen: BookList },
    SetGoal: { screen: SetGoal },
}, {
    tabBarOptions: {
        activeTintColor: 'white',
        inactiveTintColor: MKColor.BlueGrey,
        swipeEnabled: true,
        showLabel: false,
        style: {
            backgroundColor: MKColor.Amber
        }
    }
})

export default Navigation