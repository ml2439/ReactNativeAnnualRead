import TYPES from '../actions/types'

const initialState = {
    books: [],
    detailView: false,
    bookSelected: null,
    name: '',
    note: '',
    loading: false,
    updating: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
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

        // dispatch when hit pencil button to update
        case TYPES.UPDATE_BOOK:
            return {
                ...state,
                updating: true,
                name: action.payload.name,
                note: action.payload.note,
                bid: action.payload.bid,
            }

        // dispatch when hit 'UPDATE' button in update view
        case TYPES.SAVE_BOOK:
            return {
                ...state,
                updating: false,
                detailView: false,      // back to list after saving
                name: '',
                note: '',
                bid: '',
            }

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