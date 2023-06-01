import React from 'react'
import Footer from './Footer'

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
        <li><a class="dropdown-item" href="#scrollspyHeading3">Third</a></li>
        <li><a class="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
        <li><hr class="dropdown-divider" /></li>
        <li><a class="dropdown-item" href="#footer">Fifth</a></li>
      </ul>
    </li>
  </ul>
</nav>
{/* <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0">
  <h4 id="scrollspyHeading1">First heading</h4>
  <p>...</p>
  <h4 id="scrollspyHeading2">Second heading</h4>
  <p>...</p>
  <h4 id="scrollspyHeading3">Third heading</h4>
  <p>...</p>
  <h4 id="scrollspyHeading4">Fourth heading</h4>
  <p>...</p>
  <h4 id="scrollspyHeading5">Fifth heading</h4>
  <p>...</p>
</div> */}
    </div>
  )
}

export default Navbar