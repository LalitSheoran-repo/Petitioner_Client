import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';


import Navbar from '../components/Navbar/Navbar';

import { Routes } from '../routes/Routes';


const App = () => {
 // const classes = useStyles();

  return(
    <Provider store={store}>
    <BrowserRouter >
            <Navbar />
            <Routes />
    </BrowserRouter>
    </Provider>
  )
}

export default App;
