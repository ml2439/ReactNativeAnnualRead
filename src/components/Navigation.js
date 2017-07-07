import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Foundation';
import BookList from './BookList';
import SetGoal from './SetGoal';
import Stats from './Stats';
import { Color } from '../styles';

const StatsTab = StackNavigator({
    Stats: {
        screen: Stats,
        path: '/',
    },
    SetGoal: {
        screen: SetGoal,
    }
})

const Navigation = TabNavigator({
    StatsTab: {
        screen: StatsTab,
        path: '/stats',
        navigationOptions: {
            tabBarLabel: 'Stats',
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name={'flag'}
                    size={40}
                    style={{ color: tintColor }}
                />
            ),
        }
    },
    BookList: {
        screen: BookList,
        path: '/',
    },
}, {
        tabBarOptions: {
            activeTintColor: 'white',
            inactiveTintColor: Color.inactive,
            showLabel: true,
            tabBarPosition: 'bottom',
            animationEnabled: false,
            swipeEnabled: false,
            style: {
                backgroundColor: Color.background
            }
        }
    })

export default Navigation