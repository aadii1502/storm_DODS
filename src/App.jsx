import './App.css';
import Header from './components/Header';
import About from './components/About';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Sponsors/>
      <Footer/>
    </div>
  );
}

export default App;
