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
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mercury" element={<Mercury />}>
          <Route path="overview" element={<Mercury />} />
          <Route path="internal" element={<Mercury />} />
          <Route path="geology" element={<Mercury />} />
        </Route>
        <Route path="/venus" element={<Venus />}>
          <Route path="overview" element={<Venus />} />
          <Route path="internal" element={<Venus />} />
          <Route path="geology" element={<Venus />} />
        </Route>
        <Route path="/earth" element={<Earth />}>
          <Route path="overview" element={<Earth />} />
          <Route path="internal" element={<Earth />} />
          <Route path="geology" element={<Earth />} />
        </Route>
        <Route path="/mars" element={<Mars />}>
          <Route path="overview" element={<Mars />} />
          <Route path="internal" element={<Mars />} />
          <Route path="geology" element={<Mars />} />
        </Route>
        <Route path="/jupiter" element={<Jupiter />}>
          <Route path="overview" element={<Jupiter />} />
          <Route path="internal" element={<Jupiter />} />
          <Route path="geology" element={<Jupiter />} />
        </Route>
        <Route path="/saturn" element={<Saturn />}>
          <Route path="overview" element={<Saturn />} />
          <Route path="internal" element={<Saturn />} />
          <Route path="geology" element={<Saturn />} />
        </Route>
        <Route path="/uranus" element={<Uranus />}>
          <Route path="overview" element={<Uranus />} />
          <Route path="internal" element={<Uranus />} />
          <Route path="geology" element={<Uranus />} />
        </Route>
        <Route path="/neptune" element={<Neptune />}>
          <Route path="overview" element={<Neptune />} />
          <Route path="internal" element={<Neptune />} />
          <Route path="geology" element={<Neptune />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
