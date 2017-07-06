import { StackNavigator, TabNavigator } from 'react-navigation';
import BookList from './BookList';
import SetGoal from './SetGoal';
import Stats from './Stats';
import { Color } from '../styles';

const Navigation = TabNavigator({
    BookList: { screen: BookList },
    Stats: { screen: Stats },
    SetGoal: { screen: SetGoal },
}, {
        tabBarOptions: {
            activeTintColor: 'white',
            inactiveTintColor: Color.inactive,
            swipeEnabled: true,
            showLabel: false,
            style: {
                backgroundColor: Color.background
            }
        }
    })

export default Navigation