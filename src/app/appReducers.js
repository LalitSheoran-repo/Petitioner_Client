import { combineReducers } from 'redux';

import {authReducer as auth} from '../Redux/Reducer/authReducer'
import {petitionReducer as petition} from '../Redux/Reducer/petitionReducer'
import { petitionListReducer as petitionList } from '../Redux/Reducer/petitionListReducer';
import {startedSignedReducer as startedSigned} from '../Redux/Reducer/startedSignedPetitions'; 

export const appReducers = combineReducers({ 
    auth, 
    petition,
    petitionList,
    startedSigned
});
 