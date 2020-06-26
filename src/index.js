import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import store from './store';
import './App.css';
import Intro from './Intro';
import Boxes from './Boxes';
import Score from './Score';


const Root = (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/intro" component={Intro} />
                <Route path="/boxes" component={Boxes} />
                <Route path="/score" component={Score} />
                <Redirect from="/" to="/intro" />
            </Switch>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
