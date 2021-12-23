import {SIGNED, STARTED} from '../Constants/startedSignedPetitions';
import * as api from '../../Interface/apiConnection';

export const startedPetitionsFetch = (userData) => async (dispatch) => {
    try {
        const {data} = await api.fetchPetitionsStartedByMember(userData);
        var result = []
        for (var i in data)
        result.push(data[i])
        dispatch({ type: STARTED, 
                    payload:result});
    } catch (error) {
        console.log(error);
    }
};

export const signedPetitionsFetch = (userData) => async (dispatch) => {
    try {
        const {data} = await api.fetchPetitionsSignedByMember(userData);
        var result = []
        for (var i in data)
        result.push(data[i])
        dispatch({ type: SIGNED, 
                    payload:result});
    } catch (error) {
        console.log(error);
    }
};