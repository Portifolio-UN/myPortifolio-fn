import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div>
       <nav style={{ margin: 10 }}>
       <Link to="/login" style={{ padding: 5 }}>
      Login
    </Link>
    </nav>
      This page does not exist.
    </div>
  )
}

export default NotFoundPage
