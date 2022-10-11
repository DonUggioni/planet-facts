import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Mercury from './Pages/Mercury/Mercury';

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
        </Route>
      </Routes>
    </div>
  );
}

export default App;
