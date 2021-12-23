import { SIGNED, STARTED } from '../Constants/startedSignedPetitions';

const initialState = {
    started : [],
    signed : []
};

export const startedSignedReducer = (state = initialState, action) => {
    switch (action.type) {
        case STARTED:
            return {
                ...state,
                started:action.payload
            };

        case SIGNED:
            return {
                ...state,
                signed: action.payload
            };
        default:
            return state;
    }
};