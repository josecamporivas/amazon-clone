import {Routes, Route} from 'react-router-dom'
import './App.css'

import Home from './pages/Home/Home'
import SearchResult from './pages/SearchResult/SearchResult';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search/:topic' element={<SearchResult />} />
        </Routes>  
      
    </div>
  );
}

export default App;
