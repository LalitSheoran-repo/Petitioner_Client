import {FEATURED, RECENT, VICTORY} from '../Constants/petitionListConstants';
import * as api from '../../Interface/apiConnection';
import axios from 'axios';
import { toast } from 'react-toastify';

export const petitionFeaturedListFetch = () => async (dispatch) => {
    try {
        const {data} = await api.fetchPetitionFeaturedList();
        var result = []
        for (var i in data)
        result.push(data[i])
        dispatch({ type: FEATURED, 
                    payload:result});
    } catch (error) {
        console.log(error);
    }
};

export const petitionRecentListFetch = (data) => async dispatch => {
    try{
        const res = axios.get('/')
        dispatch( {
            type: FEATURED,
            payload: res.data
        })
    }
    catch(e){
        console.log(e);
    }
}

export const petitionVictoryListFetch = (data) => async dispatch => {
    try{
        const res =axios.get('/')
        dispatch( {
            type: FEATURED,
            payload: res.data
        })
    }
    catch(e){
        console.log(e);
    }
}