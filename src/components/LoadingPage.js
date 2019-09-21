import React from 'react';

const LoadingPage = () => ( //implicit return
  <div style={styles}>
   <img style={imgstyles} src="/images/loader.gif" />
  </div>
);

const styles={
  display: 'flex',
  alignItems: 'center',
  height: '100vh',
  justifyContent: 'center',
  width: '100vw'
}

const imgstyles={
  height: '6rem',
  width: '6rem'
}

export default LoadingPage ;
