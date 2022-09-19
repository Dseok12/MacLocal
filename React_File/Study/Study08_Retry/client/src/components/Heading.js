import React from 'react';
import { Link } from 'react-router-dom';

function Heading() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <h1>Hello, React</h1>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/list">List</Link>
        <Link to="/upload">Upload</Link>
      </div>
    </div>
  );
}

export default Heading;
