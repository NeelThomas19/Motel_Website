import React from 'react'
import Footer from './Footer'
import Overview from './Overview'

const Navbar = () => {
  return (
    <div className='navbar'>
      <nav id="navbar-example2" class="navbar bg-body-tertiary px-3 mb-3">
  <ul class="nav nav-pills">
    <li class="nav-item">
      <a class="nav-link" href="#Overview">Overview</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#Rooms">Rooms</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#Location">Location</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#Amenities">Amenities</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#Policies">Policies</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Contact Us</a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Third</a></li>
        <li><a class="dropdown-item" href="#">Fourth</a></li>
      </ul>
    </li>
  </ul>
</nav>
    </div>
  )
}

export default Navbar