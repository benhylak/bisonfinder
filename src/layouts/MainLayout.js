import React from 'react';
import { Route, Switch } from 'react-router-dom';

import BisonList from '../components/BisonList';
import BisonDetails from '../components/BisonDetails';
import NotFound from '../components/NotFound';

const MainLayout = () => (
    <div className="main-layout">
    <Switch>
    <Route exact path="/" component={BisonList} />
    <Route path="/bison/:id" component={BisonDetails} />
    <Route component={NotFound} />
    </Switch>
    </div>
    );
    
    export default MainLayout;