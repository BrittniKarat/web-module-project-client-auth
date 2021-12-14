import React from 'react'
import { BrowserRouter as Router} from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import reducer from './reducers'
import App from './App';

const store = createStore(reducer);

render(
  <Provider store={store}>
  <Router>
    <App />
  </Router>
  </Provider>
  ,
  document.getElementById('root')
)
