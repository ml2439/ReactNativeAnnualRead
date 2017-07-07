import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Foundation';
import BookList from './BookList';
import Stats from './Stats';
import SetGoal from './SetGoal';
import AddBook from './AddBook';
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

const BooksTab = StackNavigator({
    BookList: {
        screen: BookList,
        path: '/',
    },
    AddBook: {
        screen: AddBook,
        navigationOptions: {
            title: 'Add Book',
        },
    }
})

const Navigation = TabNavigator({
    BooksTab: {
        screen: BooksTab,
        path: '/',
        navigationOptions: {
            tabBarLabel: 'BookList',
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name={'list'}
                    size={40}
                    style={{ color: tintColor }}
                />
            )
        }
    },
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