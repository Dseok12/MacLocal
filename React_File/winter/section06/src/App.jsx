import './App.css';
import Viewer from './components/Viewer.jsx';
import Controller from './components/Controller.jsx';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const onClickButton = (value) => {
    setCount(count + value)
  }

  return (
    <div className='app'>
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  )
}

export default App;
