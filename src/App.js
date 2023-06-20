
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import AddMovie from './components/AddMovie';
import UpdateMovie from './components/UpdateMovie';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/add' element={<AddMovie/>}/>
      <Route path='/update/:id' element={<UpdateMovie/>}/>
     </Routes>
    </div>
  );
}

export default App;
