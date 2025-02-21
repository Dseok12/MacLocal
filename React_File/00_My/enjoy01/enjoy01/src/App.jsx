import '@styles/base/_Reset.css';
import '@styles/common/common.css';
import { Route, Routes } from 'react-router-dom';

import {
  About,
  Blog,
  Header,
  Home,
  Introduce,
  NotFound,
  Package,
} from '@import';

function App() {
  return (
    <div className="AppAllContents">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/package" element={<Package />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
