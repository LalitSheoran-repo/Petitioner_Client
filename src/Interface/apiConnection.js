import axios from 'axios';

const apiUrl = process.env.API_URL || 'http://127.0.0.1:5000';
console.log(apiUrl);
const API = axios.create({ baseURL: apiUrl });

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});

export const signUp = (formData) => API.post('/user/signup', formData);
export const logIn = (formData) => API.post('/user/login', formData);
export const activateAcc = (token) => API.post('/user/activate', { token });
export const fbLogin = (userID, accessToken) => API.post('/user/fblogin', {userID, accessToken});
export const getRecipients = () => API.get('/user/petition-recipients');
export const getCategories = () => API.get('/user/petition-categories');
export const submitPetition = (petitionData) => API.post('/user/submit-petition', petitionData);
export const fetchPetitionFeaturedList = () => API.get('/petition-catalog-trending');

//fetch recent petitions
export const fetchPetitionRecentList = () => API.get('/petition-catalog-recent');

//fetch petitions with victory
export const fetchPetitionVictoryList = () => API.get('/petition-catalog-victory');

//fetch petitions started by a logged in user - for 'My petitions' started tab
export const fetchPetitionsStartedByMember = (userId) => API.get(`/user/${userId}/started-petitions`);

//fetch petitions signed by a logged in user - for 'My petitions' signed tab
export const fetchPetitionsSignedByMember = (userId) => API.get(`/user/${userId}/signed-petitions`);