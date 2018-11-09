import React from 'react';
import {Route} from 'react-router-dom';
import { ContextProvider } from './campaignContext';
import { campaignConfig } from './campaignConfig';
import HomeContainer from './containers/HomeContainer';

const App = (props) => {
  return (
    <ContextProvider campaignQuestions={campaignConfig['campaignQuestions']}>
      <HomeContainer />
    </ContextProvider>
  );
}

export default App;
