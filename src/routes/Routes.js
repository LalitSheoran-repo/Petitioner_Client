import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from '../screens/Auth/Auth';
import Activate from '../screens/Activate/Activate';
import Home from '../screens/Home/Home';
import PetitionForm from '../screens/PetitionMultiStep/PetitionForm';
import PetitionReviewPage from '../screens/PetitionMultiStep/PetitionReviewPage';

//import useStyles from './styles';
import UserProfile from '../screens/userProfile/UserProfile';

//petition detail import
import PetitionDetail from '../screens/petitionDetail/PetitionDetail';

//Decision Maker signup
import SignupDM from '../screens/SignupDM/SignupDM';

// BrowsePetition 
import BrowsePetition from '../screens/PetitionBrowse/Browse';

// Mypetition
import Mypetitions from '../screens/MyPetitions/PetitionerList';


export const Routes = () => (
    <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/auth' exact component={Auth}/>
                <Route path='/start-a-petition' exact component={PetitionForm}/>
                <Route path='/petition/review' exact component={PetitionReviewPage} />
                <Route path='/user/activate/:token' exact render={props => <Activate {...props} />} />
                <Route path = '/profile' exact component={UserProfile} />
                <Route path = '/petitionDetail' exact component={PetitionDetail} />
                <Route path = '/signupDM' exact component={SignupDM} />
                <Route path = '/browse' exact component={BrowsePetition} />
                <Route path = '/my-petition' exact component={Mypetitions} />
    </Switch>
);