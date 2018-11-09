import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);


// pass down campaign name
// each step container has a dictionary of question keys
// componentDidMount fetches JSON for config
// questions contain keys? render substeps
// each substep
// questionKeys map through

// context passes campaignquestions and benefits as props
// all container components are wrapped in higherorder component passing these props
// containers take care of matching benefitkeys with questions (??)
// matched questions are passed to sub route containers
// rendered based on a dictionary of question keys on page
