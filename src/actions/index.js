import TYPES from './types';
import firebase from 'firebase';

export const selectBook = book => {
    return {
        type: TYPES.SELECTED_BOOK,
        payload: book
    }
}

export const noneSelected = () => {
    return {
        type: TYPES.NONE_SELECTED
    }
}

export const loadInitialBooks = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/books`)
            .on('value', snapshot => {
                dispatch({ type: TYPES.INITIAL_FETCH, payload: snapshot.val()})
            })
    }
}

export const formUpdate = ({prop, value}) => {
    return {
        type: TYPES.FORM_UPDATE,
        payload: {prop, value}
    }
}

export const createNewBook = ({name, note}) => {
    const { currentUser } = firebase.auth();

    // in App.js, add Thunk to use dispatch this way
    // otherwise will get error: action must be plain object
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/books`)
            .push({ name, note })
            .then(() => {
                dispatch({ type: TYPES.NEW_BOOK })  // Reset the fields to blank after creating
            })
    }
}
