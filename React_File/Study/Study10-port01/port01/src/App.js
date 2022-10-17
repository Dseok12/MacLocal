import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import Intro from "./Components/Intro/Intro";
import Services from './Components/Services/Services';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Intro/>
      <a href="https://www.youtube.com/watch?v=CKAn5dCK6RE&t=1736s">인도 유튜버</a>
      <p>1:09:53</p>
      <Services/>
    </div>
  );
}

export default App;
