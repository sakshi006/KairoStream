import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div style={{textAlign:"center"}}><h1>Page Not Found</h1>
    <Link to="/">
        <button style={{marginTop:"2rem"}} className='btn'>Home</button>
    </Link>
    </div>
  )
}
