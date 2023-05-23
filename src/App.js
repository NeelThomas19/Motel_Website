import logo from './logo.svg';
import './App.css';
import Header from './Components/Header.jsx';
import Navbar from './Components/Navbar.jsx';
import Body from './Components/Body.jsx';
import Footer from './Components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
