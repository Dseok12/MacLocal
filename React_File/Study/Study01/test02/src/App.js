import './reset.css';
import './App.css';
import Header from './components/Header/Header';
import Routing from './components/Route/Routing';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <div className='Wrap HederWrap'>
        <div className='inner'>
          <Header />
        </div>
      </div>
      <div className='Wrap BodyWrap'>
        <div className='inner'>
          <Routing />
        </div>
      </div>
      <div className='Wrap FooterWrap'>
        <div className='inner'>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
