import React from 'react';
import App from './App';
import Dashboard from './components/Dashboard';
import Heroes from './components/Heroes';
import HeroDetail from './components/HeroDetail';
import NoMatch from './NoMatch';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'


function AppRouter(){
    let heroesprops = {mydata:12};

    return (
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Dashboard} />
                <Route path="dashboard" component={Dashboard}/>
                <Route path="heroes" component={Heroes} state={heroesprops}>
                    <Route path="/hero/:id" component={HeroDetail}/>
                </Route>
                <Route path="*" component={NoMatch}/>
            </Route>
        </Router>
    );
}

export default AppRouter;
