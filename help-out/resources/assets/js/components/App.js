import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MainBody from './MainBody'

class App extends Component {
    render () {
        return (
            <BrowserRouter>
                <div>
                    <MainBody />
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))