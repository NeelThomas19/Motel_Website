import React, { useState } from "react";
import {
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Rooms = ({ type }) => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", { state: { date, options } });
  };

  return (
    <div className="rooms" id="Rooms">
      <div
        className={
          type === "list" ? "roomContainer listMode" : "roomContainer"
        }
      >
        <div className="roomList">
        <div className="roomSearch">
      <div className="roomSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="roomIcon" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="roomSearchText"
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="roomSearchItem">
                <FontAwesomeIcon icon={faPerson} className="roomIcon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="roomSearchText"
                >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.children <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            </div>
        </div>
    </div>
     );
   };

export default Rooms;

// function Rooms()
// {
//  const [disable, setDisable]= useState(true);
//  const [todate, setTodate]= useState([]);
//  const [fromdate, setFromdate]= useState([]);

//  const [todateformat, setTodateformat]= useState('');
//  const [fromdateformat, setFromdateformat]= useState('');

//  const [selectedTravelers, setSelectedTravelers] = useState(1);
//  const [adults, setAdults] = useState(1);
//  const [children, setChildren] = useState(0);

//  const handletodate= (e)=>{
//     const gettodatevalue= e.target.value;
//     const setdateformat= gettodatevalue.split('-');
//     const settoyear= setdateformat[0];
//     const settomonth= setdateformat[1];
//     const settodate= setdateformat[2];
//     const settodateformat= settoyear+""+settomonth+""+settodate;
//     setTodate(gettodatevalue);
//     setTodateformat(settodateformat);
//     setDisable(false);
//     //console.log(settodateformat);

//  }

//  const handlefromdate= (e)=>{
//     const getfromdatevalue= e.target.value;
//     const setfromformat= getfromdatevalue.split("-");
//     const setfromyear= setfromformat[0];
//     const setfrommonth= setfromformat[1];
//     const setfromdate= setfromformat[2];
//     const setfromformatdate= setfromyear+""+setfrommonth+""+setfromdate;
//     setFromdate(getfromdatevalue);
//     setFromdateformat(setfromformatdate);
//    // console.log(setfromformatdate);

//  }
//  const handleSubmit= (e)=>{
//     e.preventDefault();

//     //alert("todate "+todate+ "form date"+ fromdate);

//     if(todateformat > fromdateformat )
//     {
//     alert("Please select valid date");
//     } else  {

//      alert("Successfull ! Please set API URL");
//     }

//  }

//  const handleTravelersChange = (event) => {
//   const travelers = parseInt(event.target.value);
//   setSelectedTravelers(travelers);
//   setAdults(1); // Reset adults to 1 when the number of travelers changes
//   setChildren(0); // Reset children to 0 when the number of travelers changes
// };

// const handleAdultsChange = (event) => {
//   const adultCount = parseInt(event.target.value);
//   setAdults(adultCount);
// };

// const handleChildrenChange = (event) => {
//   const childCount = parseInt(event.target.value);
//   setChildren(childCount);
// };

// const generateRoomOptions = () => {
//   const options = [];
//   const totalRooms = Math.ceil(selectedTravelers / 2); // Divide travelers into groups of 2 per room
//   for (let i = 1; i <= totalRooms; i++) {
//     options.push(<option value={i} key={i}>{i}</option>);
//   }
//   return options;
// };


// return(
// <React.Fragment>
//   <div id="Rooms" className="rooms">
// <div className="row fthight">
// <div className="col-sm-8  mt-3">
// <h4 className="mb-4 h1">Select your dates according to your visit! </h4>

//     <form onSubmit={ handleSubmit}>
//       <div className="check">
//         <div className="row mb-4 dates w-100">
//         <label className="col-sm-5 col-form-label">Check-in</label>
//         <div className="col-sm-5">
//         <input type="date" className="form-control" name="todate" placeholder="dd-mm-yyyy" onChange={(e)=>handletodate(e)}   />
//         <span className="text-danger"> </span>
//         </div>
//         </div>

//         <div className="row mb-4 dates w-100">
//         <label className="col-sm-5 col-form-label">Check-out</label>
//         <div className="col-sm-5">
//         <input type="date" className="form-control" name="fromdate" placeholder="dd-mm-yyyy" disabled={disable}  onChange={(e)=>handlefromdate(e)}  />                    
//         </div>
//         </div>
//         </div>
//   </form>
// </div>
// </div>
// <div>
//       <label htmlFor="travelers">Number of Travelers:</label>
//       <select id="travelers" name="travelers" value={selectedTravelers} onChange={handleTravelersChange}>
//         <option value="1">1</option>
//         <option value="2">2</option>
//         <option value="3">3</option>
//         {/* Add more options as needed */}
//       </select>

//       <br/><br/>

//       <label htmlFor="adults">Adults:</label>
//       <select id="adults" name="adults" value={adults} onChange={handleAdultsChange}>
//         {generateRoomOptions()}
//       </select>

//       <br/><br/>

//       <label htmlFor="children">Children:</label>
//       <select id="children" name="children" value={children} onChange={handleChildrenChange}>
//         {generateRoomOptions()}
//       </select>
//     </div>
// </div>
// </React.Fragment>
// );
// }

