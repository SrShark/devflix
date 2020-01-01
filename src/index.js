import React from 'react'
import ReactDOM from 'react-dom'
import './scss/app.scss'
import { App } from './views/App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.querySelector('#root'))

serviceWorker.unregister()
