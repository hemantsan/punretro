import React from 'react';
import './App.css';
import Layout from './layouts/Layout/Layout';
import Routes from './Routing/Routes';
import { BrowserRouter } from 'react-router-dom';


const App = () => (
  <BrowserRouter>
    <Layout>
        <Routes />
    </Layout>
  </BrowserRouter>
);

export default App;
