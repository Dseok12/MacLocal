import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import Intro from "./Components/Intro/Intro";
import Services from './Components/Services/Services';
import Experience from './Components/Experience/Experience';
import Works from './Components/Works/Works';
import Portfolio from './Components/Portfolio/Portfolio';
import Testimonial from './Components/Testimonial/Testimonial'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonial />
    </div>
  );
}

export default App;
