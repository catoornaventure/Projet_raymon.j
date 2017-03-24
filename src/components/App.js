import '../assets/stylesheets/base.scss';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import React                             from 'react';
import Home                              from './Pages/Home/Home';
import Music                             from './Pages/Music/Music';
import Tarifs                            from './Pages/Tarifs/Tarifs';
import Contact                           from './Pages/Contact/Contact';

export default class App extends React.Component {
    render() {
        return(
            <Router history={hashHistory}>
                <Route path='/' component={Home}/>
                <Route path='/music' component={Music}/>
                <Route path='/tarifs' component={Tarifs}/>
                <Route path='/contact' component={Contact}/>
            </Router>
        )
    }
};
