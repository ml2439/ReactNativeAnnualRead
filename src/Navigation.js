import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import BookList from './components/BookList';
import SetGoal from './components/SetGoal';

const Navigation = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene 
                    key="bookList" 
                    component={BookList} 
                    title="book list" />
                <Scene 
                    key="setGoal" 
                    component={SetGoal} 
                    title="set goal"
                    initial />
            </Scene>
        </Router>
    )
}

export default Navigation