import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MagicBison from '../components/MagicBison';
import SanFrancisco from '../components/SanFrancisco';

function AppRoutes() {
    return (
        <Router>
        <Switch>
        <Route path="/magic-bison" component={MagicBison} />
        <Route path="/san-francisco" component={SanFrancisco} />
        </Switch>
        </Router>);
}

export default AppRoutes;