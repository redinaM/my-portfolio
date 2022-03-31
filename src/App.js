import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
