import {Router, Route, Switch}  from 'react-router-dom';
import React from 'react';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import Header from '../components/Header';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

//const AppRouter = () => (
// <BrowserRouter>

   // <Header />  removed, added to PrivateRoute
const AppRouter = () => (
 <Router history={history}>
  <div>
   <Switch>
    <PublicRoute
       path="/"
       component={ LoginPage }
       exact={true}
    />
    <PrivateRoute
       path="/dashboard"
       component={ ExpenseDashboardPage }
       exact={true}
    />
    <PrivateRoute
       path="/create"
       component={ AddExpensePage }
    />
    <PrivateRoute path="/edit/:id" component={ EditExpensePage } />
    <PublicRoute
       path="/help"
       component={ HelpPage }
    />
    <Route
       component={ NotFoundPage }
    />
   </Switch>
  </div>
 </Router>
);

/*
onst AppRouter = () => (
 <Router history={history}>
  <div>
   <Switch>
    <Route
       path="/"
       component={ LoginPage }
       exact={true}
    />
    <PrivateRoute
       path="/dashboard"
       component={ ExpenseDashboardPage }
       exact={true}
    />
    <PrivateRoute
       path="/create"
       component={ AddExpensePage }
    />
    <PrivateRoute path="/edit/:id" component={ EditExpensePage } />
    <Route
       path="/help"
       component={ HelpPage }
    />
    <Route
       component={ NotFoundPage }
    />
   </Switch>
  </div>
 </Router>
);
*/
export default AppRouter;
