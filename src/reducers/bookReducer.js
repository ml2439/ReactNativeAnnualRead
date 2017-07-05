import TYPES from '../actions/types'

const initialState = [

]

export default (state = initialState, action) => {
    switch (action.type) {
        case TYPES.LOAD_BOOKS:
            return [
                ...action.payload
            ]

        case TYPES.ADD_BOOK:
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
                        mark: '#00BAAD' //(new Date()).toLocaleDateString("en-US")
                    }
                }
                return book
            })

        default:
            return state
    }
}