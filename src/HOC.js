//higher order component:
//   renders another component
//   resuse code
//   pre-render processing (hijacking)
//   abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>info</h1>
    <p>the info is: {props.info}</p>
  </div>
);

const Login = (props) => (
  <div>
    <h1>login</h1>
    <p>you must log in</p>
  </div>
);

// a regular funciton that returns the HOC
// pass props: {...props}
const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin ? <p> WARNING MESSAGE </p> : <p>NO WARNING</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

// a regular function that returns the HOC
const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated
        ? <WrappedComponent {...props} />
        : <Login />}
    </div>
  );
};



//const AdminInfo = withAdminWarning(Info); // returns alternative component
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<Info info='FOR YOUR INFORMATION' />, document.getElementById('app'));
//ReactDOM.render(<AdminInfo isAdmin={false} info='FOR YOUR INFORMATION' />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info='FOR YOUR INFORMATION' />, document.getElementById('app'));
