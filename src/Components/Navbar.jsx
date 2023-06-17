import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <nav id="navbar-example2" class="navbar bg-body-primary px-3 mb-3">
  <ul class="nav nav-pills">
    <li class="nav-item">
      <a class="nav-link text-dark" href="#Overview">Overview</a>
    </li>
    <li class="nav-item">
      <a class="nav-link text-dark" href="#Rooms">Rooms</a>
    </li>
    <li class="nav-item">
      <a class="nav-link text-dark" href="#Location">Location</a>
    </li>
    <li class="nav-item">
      <a class="nav-link text-dark" href="#Amenities">Amenities</a>
    </li>
    <li class="nav-item">
      <a class="nav-link text-dark" href="#Policies">Policies</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle text-dark" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Contact Us</a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item text-dark" href="#">Third</a></li>
        <li><a class="dropdown-item text-dark" href="#">Fourth</a></li>
      </ul>
    </li>
  </ul>
</nav>
    </div>
  )
}

export default Navbar