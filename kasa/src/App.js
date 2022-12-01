import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../src/styles/All.css';
import Home from "./page/Home"
import Propos from "./page/Propos"
import data from "./data.json"
import Logement from './page/Logement';
import PageNotFound from './page/PageNotFound';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/propos" element={<Propos />} />
        <Route path="/logement/:id" element={<Logement data={data} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
