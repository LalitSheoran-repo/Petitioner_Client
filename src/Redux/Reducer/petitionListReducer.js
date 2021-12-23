import { FEATURED, RECENT, VICTORY } from '../Constants/petitionListConstants';

const initialState = {
    featured : [{
        title: "trial post 1",
        content : ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
        qui officia deserunt mollit anim id est laborum. `
    },
{
    title:"trial post 2",
    content : `  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
    qui officia deserunt mollit anim id est laborum.`
}],
    recent : [1,2,3],
    victory : [4,5,6]
};

export const petitionListReducer = (state = initialState, action) => {
    switch (action.type) {
        case FEATURED:
            return {
                ...state,
                featured:action.payload
            };

        case RECENT:
            return {
                ...state,
                recent: action.payload
            };
        case VICTORY:
            return {
                ...state,
                victory: action.payload
            };

        default:
            return state;
    }
};