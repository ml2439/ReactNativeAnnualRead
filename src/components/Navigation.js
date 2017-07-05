import { StackNavigator, TabNavigator } from 'react-navigation';
import BookList from './BookList';
import SetGoal from './SetGoal';
import Stats from './Stats';

const Navigation = TabNavigator({
    BookList: { screen: BookList },
    Stats: { screen: Stats },
    SetGoal: { screen: SetGoal },
}, {
    tabBarOptions: {
        activeTintColor: '#aaa',
        inactiveTintColor: 'white',
        swipeEnabled: true,
        showLabel: false,
        style: {
            backgroundColor: '#c83652'
        }
    }
})

export default Navigation