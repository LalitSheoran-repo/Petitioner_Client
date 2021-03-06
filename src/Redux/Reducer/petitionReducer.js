import { PETITIONRECIPIENT, PETITIONCATEGORY, PETITIONDATA} from '../Constants/petitionConstants';

const initialState = {
    recipients: [],
    category: "",
    content: {}
}

export const petitionReducer = (state = initialState, action) => {
    //console.log("in reducer");
    switch(action.type) {
        case PETITIONDATA:
            return {...state,
                content: action?.data
            }
            
        case PETITIONRECIPIENT:
            return { ...state, 
                     recipients: action.data.map((i) => {
                            return {
                                label: i, 
                                value: i
                            }
                        })
                    }
        
        case PETITIONCATEGORY:
            return { ...state, 
                     category: action.data.map((i) => {
                                return {
                                    label: i, 
                                    value: i
                                }
                            })
                    }
        
        default:
            return state;
    }
}