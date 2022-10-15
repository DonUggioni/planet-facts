import { Routes, Route } from 'react-router-dom';
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
          <Route path=":id" element={<Mercury />} />
        </Route>
        <Route path="/venus" element={<Venus />}>
          <Route path=":id" element={<Venus />} />
        </Route>
        <Route path="/earth" element={<Earth />}>
          <Route path=":id" element={<Earth />} />
        </Route>
        <Route path="/mars" element={<Mars />}>
          <Route path=":id" element={<Mars />} />
        </Route>
        <Route path="/jupiter" element={<Jupiter />}>
          <Route path=":id" element={<Jupiter />} />
        </Route>
        <Route path="/saturn" element={<Saturn />}>
          <Route path=":id" element={<Saturn />} />
        </Route>
        <Route path="/uranus" element={<Uranus />}>
          <Route path=":id" element={<Uranus />} />
        </Route>
        <Route path="/neptune" element={<Neptune />}>
          <Route path=":id" element={<Neptune />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
