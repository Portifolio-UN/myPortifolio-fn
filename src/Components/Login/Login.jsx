import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom';

const Login = () => {


  return (
    <div>
      <nav style={{ margin: 10 }}>
    <Link to="/" style={{ padding: 5 }}>
      Home
    </Link>
    <Link to="/about" style={{ padding: 5 }}>
      About
    </Link>
  </nav>
      <p>Login Page to be here</p>
    </div>
  ): <Navigate to= "/dashboard"/>
}

export default Login
