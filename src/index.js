import React from 'react'
import ReactDOM from 'react-dom'

import App from './app'
import   counter from './redux/reducer'
import { createStore } from 'redux'

let store =  createStore(counter)

const render = ()=>{
    ReactDOM.render(<App store={store}/>,document.getElementById('root'))
}

render()

store.subscribe(render)
