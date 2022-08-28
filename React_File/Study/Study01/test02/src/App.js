import './reset.css';
import './App.css';
import Header from './components/Header/Header';
import Routing from './components/Route/Routing';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <div className='inner'>
        <Header />
        <Routing />
        <Footer />
      </div>
    </div>
  );
}

export default App;
