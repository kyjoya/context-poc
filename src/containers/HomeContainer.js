import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './App';
// import rootReducer from './reducers/index';
import HomeData from './Home/HomeData';
import { campaignConfig } from './campaignConfig';
import { CampaignContext } from './campaignConfig';

// import 'font-awesome/css/font-awesome.css';
// import './styles/css/index.css';
// import 'wayfinder-custom-bootstrap/build/index.css';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <CampaignContext.Provider value={campaignConfig['campaign_pa']}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CampaignContext.Provider>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
