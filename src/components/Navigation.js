import { StackNavigator, TabNavigator } from 'react-navigation';
import { MKColor } from 'react-native-material-kit';
import BookList from './BookList';
import SetGoal from './SetGoal';
import AddBook from './AddBook';

const Navigation = TabNavigator({
    BookList: { screen: BookList },
    AddBook: { screen: AddBook },
    SetGoal: { screen: SetGoal },
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