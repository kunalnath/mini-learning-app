import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { startGetAccount } from './actions/loginAction'
import { startGetProfiles } from './actions/profileAction'
// import { startGetRooms } from './actions/roomAction'

const store = configureStore()

store.subscribe(()=>{
  console.log(store.getState())
})

// console.log('ls',localStorage)

// handle Page Reload
if(localStorage.getItem('token')){
  store.dispatch(startGetAccount())
  store.dispatch(startGetProfiles())
}

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(jsx,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
