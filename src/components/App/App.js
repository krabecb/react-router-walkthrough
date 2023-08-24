import './App.css';
import { Routes, Route } from 'react-router-dom'
import Main from '../../pages/Main/Main'
import StarshipsList from '../../pages/StarshipsList/StarshipsList';
import Starship from '../../pages/Starship/Starship';
import Nav from '../Nav/Nav'
import NotFound from '../../pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Nav />
      <main className="container">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/ships" element={<StarshipsList />} />
          <Route path="/ships/:id" element={<Starship />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
