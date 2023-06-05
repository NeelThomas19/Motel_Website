import React from 'react'
import { FaParking, FaSnowflake} from "react-icons/fa";
import { BiWifi } from "react-icons/bi";
import { Ri24HoursLine } from "react-icons/ri";
import { BsFillAirplaneFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";

const Overview = () => {
  return (
     <div id='Overview' className='overview'>
      <div class="row w-100">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="cd">
      <div class="card-body">
        <h5 class="card-title">Facilities Provided</h5>
        <div class="d-flex flex-row mb-3 grid gap-5 row-gap-3">
        <p class="card-text"><FaParking/>Parking Included</p>
        <p class="card-text"><FaSnowflake/>Air Conditioning</p>
        </div>
        <div class="d-flex flex-row mb-3 grid gap-5 row-gap-3">
        <p class="card-text"><Ri24HoursLine />24/7 Front Desk</p>
        <p class="card-text"><BiWifi/>Free WiFi</p>
        </div>
        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
      </div>
    </div>
  </div>
  <div class="col-sm-6" id='explore'>
    <div class="cd">
      <div class="card-body">
        <h5 class="card-title" >Explore the area!</h5>
        <div class="container text-center">
          <div class="row">
            <div class="col">
            <p class="card-text"><ImLocation/>Wildwood Boardwalk</p>
            </div>
            <div class="col">
            <p class="card-text">2 min walk</p>
            </div>
          </div>
          <div class="row">
            <div class="col">
            <p class="card-text"><ImLocation/>Wildwood Beach</p>
            </div>
            <div class="col">
            <p class="card-text">5 min walk</p>
            </div>
          </div>
          <div class="row">
            <div class="col">
            <p class="card-text"><ImLocation/>Morey's Piers</p>
            </div>
            <div class="col">
            <p class="card-text">10 min walk</p>
            </div>
          </div>
          <div class="row">
            <div class="col">
            <p class="card-text"><BsFillAirplaneFill/>Cape May, NJ(WWD-Cape May County)</p>
            </div>
            <div class="col">
            <p class="card-text">15 min drive</p>
            </div>
          </div>
        {/* <div class="d-flex flex-row mb-3 grid gap-5 row-gap-1 ">
        <p class="card-text">Wildwood Boardwalk</p>
        <p class="card-text">2 min walk</p>
        </div>
        <div class="d-flex flex-row mb-3 grid gap-5 row-gap-1 ">
        <p class="card-text">Wildwood Beach</p>
        <p class="card-text">5 min walk</p>
        </div>
        <div class="d-flex flex-row mb-3 grid gap-5 row-gap-1 ">
        <p class="card-text">Morey's Piers</p>
        <p class="card-text">10 min walk</p>
        </div>
        <div class="d-flex flex-row mb-3 grid gap-5 row-gap-1 ">
        <p class="card-text">Cape May, NJ(WWD-Cape May County)</p>
        <p class="card-text">15 min drive</p>
        </div> */}
        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
      </div>
    </div>
  </div>
</div>
      </div>
      </div>
  )
}

export default Overview