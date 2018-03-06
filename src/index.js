import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import { App } from './App'

// css
import 'font-awesome/css/font-awesome.css'
import 'bulma/css/bulma.css'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
