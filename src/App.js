
import './App.css';
import AddPatient from './components/AddPatient';
import Search from './components/Search';
import Delete from './components/Delete';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import View from './components/View';

function App() {
  return (
    
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<AddPatient/>}/>
        <Route path='/Search' element={<Search/>}/>
        <Route path='/Delete' element={<Delete/>}/>
        <Route path='/View' element={<View/>}/>
      </Routes>
      </BrowserRouter>

  );
}


export default App;

