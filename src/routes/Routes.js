import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from '../components/Auth/Auth';
import Activate from '../components/Activate/Activate';
import Home from '../components/Home/Home';
import PetitionForm from '../components/PetitionMultiStep/PetitionForm';
import PetitionReviewPage from '../components/PetitionMultiStep/PetitionReviewPage';

//import useStyles from './styles';
import UserProfile from '../components/userProfile/UserProfile';

//petition detail import
import PetitionDetail from '../components/petitionDetail/PetitionDetail';

//Decision Maker signup
import SignupDM from '../components/SignupDM/SignupDM';

// BrowsePetition 
import BrowsePetition from '../components/PetitionBrowse/Browse';


export const Routes = () => (
    <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/auth' exact component={Auth}/>
                <Route path='/start-a-petition' exact component={PetitionForm}/>
                <Route path='/petition/review' exact component={PetitionReviewPage} />
                <Route path='/user/activate/:token' exact render={props => <Activate {...props} />} />
                <Route path = '/share' exact component={ShareTest} />
                <Route path = '/profile' exact component={UserProfile} />
                <Route path = '/petitionDetail' exact component={PetitionDetail} />
                <Route path = '/signupDM' exact component={SignupDM} />

                <Route path = '/browse' exact component={BrowsePetition} />
    </Switch>
);