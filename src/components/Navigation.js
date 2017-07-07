import { StackNavigator, TabNavigator } from 'react-navigation';
import BookList from './BookList';
import SetGoal from './SetGoal';
import Stats from './Stats';
import { Color } from '../styles';

const StatsTab = StackNavigator({
    Stats: {
        screen: Stats,
        path: '/stats',
    },
    SetGoal: {
        screen: SetGoal,
        path: '/stats/setgoal',
    }
})

const Navigation = TabNavigator({
    StatsTab: { 
        screen: StatsTab,
        path: '/stats',
    },
    BookList: { 
        screen: BookList,
        path: '/',
    },
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