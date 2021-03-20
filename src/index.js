import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import reducer, { initialState } from "./data/reducer";
import App from './App';
import { DataLayer } from './data/DataLayer';

ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
      <App />
    </DataLayer>
  </React.StrictMode>,
  document.getElementById('root')
);
