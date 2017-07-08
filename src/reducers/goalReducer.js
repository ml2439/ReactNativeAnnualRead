import TYPES from '../actions/types'

let aYearFromNow = new Date()
aYearFromNow.setFullYear(aYearFromNow.getFullYear() + 1)
aYearFromNow = aYearFromNow.toLocaleDateString("en-US")

const initialState = {
    num: 7,
    ddl: aYearFromNow
}

export default (state = initialState, action) => {
    switch (action.type) {
        case TYPES.INIT_GOAL: 
            return initialState

        case TYPES.LOAD_GOAL:
            return {
                ...action.payload
            }

        case TYPES.SAVE_GOAL:
            return {
                ...state,
                num: action.payload.num,
                ddl: action.payload.ddl
            }

        case TYPES.FORM_UPDATE_GOAL:
            return {
                ...state,
                [action.payload.prop]: action.payload.value
            }

        default:
            return state
    }
}