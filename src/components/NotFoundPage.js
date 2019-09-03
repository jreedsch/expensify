import React from 'react';
import { Link }  from 'react-router-dom';

const NotFoundPage = () => ( //implicit return
  // server side routing: <div> 404 = page not found! <a href="/">home</a></div>
  <div> 404 = page not found! <Link to='/'>Home</Link></div>
);

export default NotFoundPage;
