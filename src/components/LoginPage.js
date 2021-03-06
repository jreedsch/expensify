import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => ( //destructure props, set by mapDIspatchToProps
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expensify App</h1>
      <p>Get your expenses under control</p>
      <button className="button_layout" onClick={startLogin}>Login with Google</button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin:  () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
