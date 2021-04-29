import logo from './logo.svg';
import './App.css';
import SignupForm from './Components/SignupForm';
import './qacinemas.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Home/Home';
import axios from 'axios';

const FILMSURL = `http://localhost:4000/films`;


function App() {
  return (
    <div className="container">
      <Header/>
      <div className="container">
        <Home/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
