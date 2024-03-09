import { Routes,Route, BrowserRouter as Router} from 'react-router-dom';
import Cards from './components/cards';
import Navbar from "./components/Navbar";
import CountryInfo from "./components/CountryInfo";
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/AGR-Assignment" element={<Cards/>} />
        <Route path="/" element={<Cards/>} />
        <Route path="/CountryInfo" element={<CountryInfo/>} />
      </Routes>
    </Router>
  );
}

export default App;
