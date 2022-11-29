import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../src/styles/All.css';
import Navbar from "./components/Navbar";
import Home from "./page/Home"
import Propos from "./page/Propos"
import data from "./data.json"
import Logement from './page/Logement';

function App() {
  return (
    <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/propos" element={<Propos/>} />
                <Route path="/logement/:id" element={<Logement data={data} />} />
            </Routes>
        </BrowserRouter>
  );
}

export default App;
