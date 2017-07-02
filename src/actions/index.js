import TYPES from './types';

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