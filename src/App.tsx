import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import Login from './resource/views/Login';
import { client } from './config';
import './App.css';

const App: FunctionComponent = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Route path='/' component={Login} />
        <Route path='/login' component={Login} />
      </Router>
    </ApolloProvider>
  );
};

export default App;
