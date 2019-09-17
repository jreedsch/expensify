import React from 'react';
import { NavLink }  from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

const Header = ({ startLogout }) => ( //implicit return
  <header>
    <h1>Expensify</h1>
    <div><NavLink to='/dashboard' activeClassName='is-active' exact={true}>Home</NavLink></div>
    <div><NavLink to='/create' activeClassName='is-active'>Add</NavLink></div>
    <div><NavLink to='/help'  activeClassName='is-active'>Help</NavLink></div>
    <button onClick={startLogout}>Logout</button>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout:  () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
