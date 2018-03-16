import React, { Component } from "react";
import App from './App';
import Landing from './Landing';
import Login from './Login';
import {Route, BrowserRouter as Router} from 'react-router-dom'

export default class MainRouter extends Component {
    constructor(props){
        super(props);
        this.state = {
            login: false
        }
    }
    render(){
        return(
        <Router>
            <div>
                <Route exact path='/EventBeast' component={Landing} />
                <Route path='/EventBeast/search' component={App} />
                <Route path='/EventBeast/login' component={Login}/>
            </div>
        </Router>
        )
    }
}