import { PETITIONRECIPIENT, PETITIONCATEGORY, PETITIONDATA } from '../Constants/petitionConstants';

export const storeRecipients = () => ({
    type: PETITIONRECIPIENT,
    data: null
});

export const storeCategories = () => ({
    type: PETITIONCATEGORY,
    data: null
});

export const savePetitionData = () => ({
    type: PETITIONDATA,
    data: null 
})