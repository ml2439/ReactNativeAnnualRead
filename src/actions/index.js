import { AsyncStorage } from 'react-native';
import TYPES from './types';
import books from '../reducers/books.json';

export const selectBook = book => {
    return {
        type: TYPES.SELECTED_BOOK,
        payload: book
    }
}

// export const noneSelected = () => {
//     return {
//         type: TYPES.NONE_SELECTED
//     }
// }

// export const loadInitialBooks = () => {
//     const { currentUser } = firebase.auth();

//     return (dispatch) => {
//         firebase.database().ref(`/users/${currentUser.uid}/books`)
//             .on('value', snapshot => {
//                 dispatch({ type: TYPES.INITIAL_FETCH, payload: snapshot.val()})
//             })
//     }
// }

export const loadInitialBooks = () => {
    return {
        type: TYPES.INITIAL_FETCH,
        payload: books
    }
}

export const formUpdateBook = ({prop, value}) => {
    return {
        type: TYPES.FORM_UPDATE_BOOK,
        payload: {prop, value}
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

export const formUpdateGoal = ({prop, value}) => {
    return {
        type: TYPES.FORM_UPDATE_GOAL,
        payload: {prop, value}
    }
}

export const setGoal = ({num, ddl}) => {
    return (dispatch) => {
        AsyncStorage.setItem(
            '@AR:Goal',
            JSON.stringify({num, ddl})
        ).then(() => {
            dispatch({ type: TYPES.SAVE_GOAL, payload: {num, ddl} })
        })
    }
}

// export const createNewBook = ({name, note}) => {
//     const { currentUser } = firebase.auth();

//     // in App.js, add Thunk to use dispatch this way
//     // otherwise will get error: action must be plain object
//     return (dispatch) => {
//         firebase.database().ref(`/users/${currentUser.uid}/books`)
//             .push({ name, note })
//             .then(() => {
//                 dispatch({ type: TYPES.NEW_BOOK })  // Reset the fields to blank after creating
//             })
//     }
// }

// export const removeBook = (bid) => {
//     const { currentUser } = firebase.auth();
//     return (dispatch) => {
//         firebase.database().ref(`/users/${currentUser.uid}/books/${bid}`)
//             .remove()
//             .then(() => {
//                 dispatch({ type: TYPES.REMOVE_BOOK })
//             })
//     }
// }

// export const updateBook = (bookSelected) => {
//     return {
//         type: TYPES.UPDATE_BOOK,
//         payload: bookSelected
//     }
// }

// export const saveBook = ({name, note, bid}) => {
//     const { currentUser } = firebase.auth();
//     return (dispatch) => {
//         firebase.database().ref(`/users/${currentUser.uid}/books/${bid}`)
//             .set({ name, note, bid })
//             .then(() => {
//                 dispatch({ type: TYPES.SAVE_BOOK })  // Reset the fields to blank after creating
//             })
//     }
    
// }