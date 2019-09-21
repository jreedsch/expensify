import React from 'react';
import { Route, Redirect }  from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/Header';

// change case of component
// ... rest = remaining props

//handle redirect when already logged in (lecture 167)
export const PublicRoute = ({isAuthenticated, component: Component, ...rest }) => (
  <Route {...rest} component={(props) => (
    isAuthenticated ? (
      <Redirect to="/dashboard" />
    ) : (
      <div>
        <Component {...props} />
      </div>
    )
  )}/>
);

//flip to boolean, undefined = false
const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PublicRoute);

/*

const AppRouter = () => (
 <Router history={history}>
  <div>
   <Header />
   <Switch>
    <Route
       path="/"
       component={ LoginPage }
       exact={true}
    />
    <Route
       path="/dashboard"
       component={ ExpenseDashboardPage }
       exact={true}
    />
    <Route
       path="/create"
       component={ AddExpensePage }
    />
    <Route path="/edit/:id" component={ EditExpensePage } />
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
