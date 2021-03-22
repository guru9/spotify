import React from 'react'
import './index.css'
import ReactDOM from 'react-dom'
import reducer, { initialState } from './data/reducer'
import App from './App'
import { DataLayer } from './data/DataLayer'
import { SoundLayer } from './data/SoundLayer'
import soundReducer, { soundInitialState } from './data/soundReducer'

ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
      <SoundLayer initialState={soundInitialState} reducer={soundReducer}>
        <App />
      </SoundLayer>
    </DataLayer>
  </React.StrictMode>,
  document.getElementById('root')
)
