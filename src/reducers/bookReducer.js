import TYPES from '../actions/types'
import books from './books.json';

const initialState = {
    books,
    detailView: false,
    bookSelected: null,
    name: '',
    note: '',
    loading: false,
}

export default (state=initialState, action) => {
    switch(action.type) {
        case TYPES.INITIAL_FETCH:
            return {
                ...state,
                books: action.payload
            }

        case TYPES.SELECTED_BOOK:
            return {
                ...state,
                detailView: true,
                bookSelected: action.payload,
            }

        case TYPES.NONE_SELECTED:
            return {
                ...state,
                detailView: false,
                bookSelected: null,
            }

        case TYPES.FORM_UPDATE:
            return {
                ...state,
                [action.payload.prop]: action.payload.value
            }

        case TYPES.NEW_BOOK: 
            return {
                ...state,
                name: '',
                note: '',
            }

        // case TYPES.ADD_BOOK:
        //     return {
        //         ...state,
        //         ...action.newBook
        //     }

        case TYPES.REMOVE_BOOK:
            return {
                ...state,
                detailView: false,
                bookSelected: null
            }

        default:
            return state
    }
}