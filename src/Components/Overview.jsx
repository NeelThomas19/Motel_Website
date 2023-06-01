import React from 'react';
import Slider from "react-slick";
import 'font-awesome/css/font-awesome.min.css';

const PrevArrow = ({ onClick }) => (
  <div className="slick-arrow slick-prev" onClick={onClick}>
    <i className="fa fa-chevron-left" aria-hidden="true" />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div className="slick-arrow slick-next" onClick={onClick}>
    <i className="fa fa-chevron-right" aria-hidden="true" />
  </div>
);

const Overview = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <Slider {...settings}>
      {/* <div>
        <img src="Assets\Images\Screenshot 2023-06-01 223210.png" alt="1" /> */}
        <div class="card" style="width: 18rem;">
  <img src="Assets\Images\Screenshot 2023-06-01 223210.png" class="card-img-top" alt="..." />
      </div>
      <div class="card" style={{height: '300px'}}>
  <img src="Assets\Images\Screenshot 2023-06-01 223228.png" class="card-img-top" alt="..." />
      </div>
      <div class="card" style={{height: '300px'}}>
  <img src="Assets\Images\Screenshot 2023-06-01 223248.png" class="card-img-top" alt="..." />
      </div>
      <div class="card" style={{height: '300px'}}>
  <img src="Assets\Images\Screenshot 2023-06-01 223307.png" class="card-img-top" alt="..." />
      </div>
      <div class="card" style={{height: '300px'}}>
  <img src="Assets\Images\Screenshot 2023-06-01 223319.png" class="card-img-top" alt="..." />
      </div>
      <div class="card" style={{height: '300px'}}>
  <img src="Assets\Images\Screenshot 2023-06-01 223337.png" class="card-img-top" alt="..." />
      </div>
      {/* Add more card items as needed */}
    </Slider>
  );
};

export default Overview