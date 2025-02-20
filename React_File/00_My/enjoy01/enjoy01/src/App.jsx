import '@styles/base/_Reset.css';
import '@styles/common/common.css';
import { Route, Routes } from 'react-router-dom';

import { About, Header, Home, Introduce, Package } from '@import'; // alias 적용

function App() {
  return (
    <div className="AppAllContents">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/package" element={<Package />} />
      </Routes>
    </div>
  );
}

export default App;
