import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

import { Routes } from '../routes/Routes';


const App = () => {
 // const classes = useStyles();

  return(
    <BrowserRouter >
            <Navbar />
            <Routes />
    </BrowserRouter>
  )
}

export default App;
