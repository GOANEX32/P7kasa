import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../src/styles/All.css';
import Navbar from "./components/Navbar";
import Home from "./page/Home"
import Propos from "./page/Propos"

function App() {
  return (
    <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/propos" element={<Propos/>} />
            </Routes>
        </BrowserRouter>
  );
}

export default App;
