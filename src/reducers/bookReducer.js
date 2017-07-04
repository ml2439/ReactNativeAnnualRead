import TYPES from '../actions/types'

const initialState = [

]

export default (state = initialState, action) => {
    switch (action.type) {
        case TYPES.INITIAL_FETCH:
            return [
                ...action.payload
            ]

        case TYPES.SAVE_BOOK:
            return [
                ...state,
                {
                    name: action.payload.name,
                    author: action.payload.author,
                    mark: "#FFC300",
                    finished: false
                }
            ]

        case TYPES.REMOVE_BOOK: {
            return [
                ...state.slice(0, action.payload),
                ...state.slice(action.payload + 1)
            ]
        }

        case TYPES.TOGGLE_BOOK:
            return state.map((book, bid) => {
                if (bid === action.payload && !book.finished) {
                    return {
                        ...book,
                        finished: true,
                        mark: '#00BAAD'//(new Date()).toLocaleDateString("en-US")
                    }
                }
                return book
            })

        case TYPES.FORM_UPDATE_BOOK:
            return {
                ...state,
                [action.payload.prop]: action.payload.value
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



        default:
            return state
    }
}