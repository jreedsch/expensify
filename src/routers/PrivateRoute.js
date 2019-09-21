import React from 'react';
import { Route, Redirect }  from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/Header';

// change case of component
// ... rest = remaining props
export const PrivateRoute = ({isAuthenticated, component: Component, ...rest }) => (
  <Route {...rest} component={(props) => (
    isAuthenticated ? (
      <div>
        <Header />
        <Component {...props} />
      </div>
    ) : (
      <Redirect to="/" />
    )
  )}/>
);

//flip to boolean, undefined = false
const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PrivateRoute);

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
