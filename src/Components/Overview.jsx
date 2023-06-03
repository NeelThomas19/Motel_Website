import React from 'react'
import { FaParking } from "react-icons/fa";

const Overview = () => {
  return (
     <div id='Overview' className='overview'>
      <div className="text">
        <h4>SeaRay Motel</h4>
        <p><a href='#'>Reviews</a></p>
        <h5>Some Facilities</h5>
        <p><FaParking />Parking Included</p>
      </div>
      <div className="text">
        <h4 className='Explore'>Explore the area!</h4>
        <p>Content 2</p>
      </div>
      </div>
      
  )
}

export default Overview