import logo from './logo.svg';
import './App.css';
import SignupForm from './Components/SignupForm';
import './qacinemas.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Home/Home';
import axios from 'axios';
import Modal from './Components/utils/Modal';

const FILMSURL = `http://localhost:4000/films`;
const IMAGESURL = `http://localhost:4000/images`;


function App() {
  const [getError, setGetError] = useState(``);
  const [films, setFilms] = useState(``);
  const [images, setImages] = useState(``);

  useEffect(() => {
    const getData = async () => {
      setFilms(await getFilms());
      setImages(await getImages());
    }
    getData();
  });

  const getFilms = () => {
    try {
      const res = await axios.get(FILMSURL);
      return res.data.length ? { films: res.data } : { error: 'There are no films stored' };
    }
    catch (e) {
      setGetError(`Data not available from server: ${e.message}`);
      return { error: `Data not available from server: ${e.message}` };
    }
  }

  const getImages = () => {
    try {
      const res = await axios.get(IMAGESURL);
      return res.data.length ? { images: res.data } : { error: 'There are no films stored' };
    }
    catch (e) {
      setGetError(`Data not available from server: ${e.message}`);
      return { error: `Data not available from server: ${e.message}` };
    }
  }

  return (
    <>
      {getError && <Modal handleClose={() =>
        setGetError(``)}
        message={getError} />}
      <div className="container">
        <Header />
        <div className="container">
          <Home />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
