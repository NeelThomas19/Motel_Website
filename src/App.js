// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header.jsx';
import Navbar from './Components/Navbar.jsx';
import Overview from './Components/Overview.jsx';
import Rooms from './Components/Rooms.jsx';
import Location from './Components/Location.jsx';
import Amenities from './Components/Amenities.jsx';
import Policies from './Components/Policies.jsx';
import Footer from './Components/Footer.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import{
  BrowserRouter as Router,
} from "react-router-dom";
import './Components/Style.css';
import Carousel from './Components/Carousel';
function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Navbar />
      <Carousel />
      <Overview />
      <Rooms />
      <Location />
      <Amenities/>
      <Policies />
      <Footer />
      </Router>
    </div>
  );
}

export default App;
