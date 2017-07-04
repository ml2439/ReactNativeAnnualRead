import { StackNavigator, TabNavigator } from 'react-navigation';
import BookList from './BookList';
import SetGoal from './SetGoal';
import Stats from './Stats';

const Navigation = TabNavigator({
    BookList: { screen: BookList },
    SetGoal: { screen: SetGoal },
    Stats: { screen: Stats },
}, {
    tabBarOptions: {
        activeTintColor: '#888',
        inactiveTintColor: 'white',
        swipeEnabled: true,
        showLabel: false,
        style: {
            backgroundColor: '#900C3F'
        }
    }
})

export default Navigation