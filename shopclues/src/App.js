import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <Home/>
      <Home/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
