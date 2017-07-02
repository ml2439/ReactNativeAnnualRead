import TYPES from '../actions/types'
import books from './books.json';

const initialState = {
    books,
    detailView: false,
    bookSelected: null,
}

export default (state=initialState, action) => {
    switch(action.type) {
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

        default:
            return state
    }
}