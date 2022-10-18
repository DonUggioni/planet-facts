import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import Earth from './Pages/Earth/Earth';
import Home from './Pages/Home/Home';
import Jupiter from './Pages/Jupiter/Jupiter';
import Mars from './Pages/Mars/Mars';
import Mercury from './Pages/Mercury/Mercury';
import Neptune from './Pages/Neptune/Neptune';
import Saturn from './Pages/Saturn/Saturn';
import Uranus from './Pages/Uranus/Uranus';
import Venus from './Pages/Venus/Venus';

import NavBar from './UI/Navigation/NavBar';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <NavBar />
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/#" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="/mercury" element={<Mercury />} />
          <Route path="/venus" element={<Venus />} />
          <Route path="/earth" element={<Earth />} />
          <Route path="/mars" element={<Mars />} />
          <Route path="/jupiter" element={<Jupiter />} />
          <Route path="/saturn" element={<Saturn />} />
          <Route path="/uranus" element={<Uranus />} />
          <Route path="/neptune" element={<Neptune />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
