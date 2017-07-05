import { AsyncStorage } from 'react-native';
import TYPES from './types';
import books from '../reducers/books.json';

export const loadInitialBooks = () => {
    return {
        type: TYPES.INITIAL_FETCH,
        payload: books
    }
}

export const removeBook = index => {
    return {
        type: TYPES.REMOVE_BOOK,
        payload: index
    }
}

export const toggleBook = bid => {
    return {
        type: TYPES.TOGGLE_BOOK,
        payload: bid
    }
}

export const addBook = (bookState) => {
    return {
        type: TYPES.ADD_BOOK,
        payload: bookState
    }
}

/*********************************************************
 ***************************** GOAL ACTION CREATORS
 *********************************************************/
// assume no error
export const loadGoal = () => {
    return (dispatch) => {
        AsyncStorage.getItem(
            '@AR:Goal',
            (err, value) => {
                let myGoal = {}
                if (value) {
                    myGoal = JSON.parse(value)
                }
                dispatch({
                    type: TYPES.LOAD_GOAL,
                    payload: myGoal
                })
            }
        )
    }
}

export const setGoal = ({ num, ddl }) => {
    return (dispatch) => {
        AsyncStorage.setItem(
            '@AR:Goal',
            JSON.stringify({ num, ddl })
        ).then(() => {
            dispatch({ type: TYPES.SAVE_GOAL, payload: { num, ddl } })
        })
    }
}

export const formUpdateGoal = ({ prop, value }) => {
    return {
        type: TYPES.FORM_UPDATE_GOAL,
        payload: { prop, value }
    }
}