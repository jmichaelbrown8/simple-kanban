import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store';
import App from './App';
import './index.css';

const store = configureStore();

const render = () => {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  );
}

render();

store.subscribe(render);
