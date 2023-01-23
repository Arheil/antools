import './App.scss';
import data from './assets/data/card-data/card-data.json';
import newData from './assets/data/card-data/newcomerTools-data.json';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Tools from './components/Tools/Tools';
import Brands from "./components/Brands/Brands";
import Newcomer from "./components/Newcomer/Newcomer";
import Slider from "./components/Slider/Slider";
import JoinUs from "./components/JoinUs/JoinUs";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className='container'>
      <Header />
      <Hero />
      <Tools data={data} />
      <Brands />
      <Newcomer data={newData} />
      <Slider />
      <JoinUs />
      <Footer />
      </div>
    </div>
  );
}

export default App;
