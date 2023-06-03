import React from 'react'
import { FaParking, FaSnowflake } from "react-icons/fa";
import { BiWifi } from "react-icons/bi";
import { Ri24HoursLine } from "react-icons/ri"

const Overview = () => {
  return (
     <div id='Overview' className='overview'>
      <div className="text">
        <h4>SeaRay Motel</h4>
        <p><a href='#'>Reviews</a></p>
        <h5>Some Facilities</h5>
        <div className="text1">
        <p className='t1'><FaParking />Parking Included</p>
        <p><FaSnowflake />Air Conditioning</p>
        </div>
        <div className="text1">
          <p><BiWifi />Free WiFi</p>
          <p><Ri24HoursLine />24/7 Front Desk</p>
        </div>
      </div>
      <div className="expl">
        <h4 className='Explore'>Explore the area!</h4>
        <div className="text1">
        </div>
      </div>
      </div>
  )
}

export default Overview