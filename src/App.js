
import './App.css';
import Navbar from'./components/nav';
import {
 
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Modify from './components/modify';
import Add from './components/add_data';

function App() {
  return (
    <div className="App">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>
      <Navbar/>
      
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/add' element={<Add/>} />
         <Route path='/modify' element={<Modify/>} />
      </Routes>
      
    </div>
  );
}

export default App;
