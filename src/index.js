import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import './index.css';
import configureStore from './store/configureStore'
import App from './App';
import { Container } from '@material-ui/core';

  const store = configureStore()
    console.log(store.getState())
    store.subscribe(()=>{
    console.log('updated store', store.getState())
  })

ReactDOM.render(
  <Provider store = {store}>
      <BrowserRouter>
          <Container disableGutters>
            <App />
          </Container>
      </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
