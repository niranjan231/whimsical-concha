import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Categories from "./Page/Categories"
import Productpage from "./Page/Productpage"
import Home from './Home/Home';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/categories' element={<Categories />} />
        <Route path='/productpage' element={<Productpage />} />
      </Routes>
    </div>
  );
}

export default App;
