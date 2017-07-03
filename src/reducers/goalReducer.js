import TYPES from '../actions/types'

const initialState = {
    num: 24,
    ddl: new Date()
}

export default (state = initialState, action) => {
    switch (action.type) {
        case TYPES.SAVE_GOAL:
            return {
                ...state,
                num: action.payload.num,
                ddl: action.payload.ddl
            }
    }
}