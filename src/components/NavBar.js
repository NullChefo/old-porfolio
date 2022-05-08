import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (

        <div className="my-nav_bar">

        <div className="container">
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
      
        <span className="fs-4">Personal Portfolio</span>
      </a>

      <ul className="nav nav-pills">

        <li className="nav-item">   <Link to='/' className="nav-link" >Home</Link>   </li>
        <li className="nav-item">   <Link to='/project' className="nav-link">Projects</Link>     </li>
        <li className="nav-item">    <Link to='/contacts' className="nav-link">Contact</Link>     </li>
        <li className="nav-item">    <Link to='/applications' className="nav-link">Applications</Link>     </li>
          <li className="nav-item">  <Link to='/experience' className="nav-link">Experience </Link>      </li>
 


      </ul>
    </header>
  </div>
</div>
    )
}

export default NavBar
