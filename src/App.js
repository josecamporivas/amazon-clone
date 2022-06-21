import {Routes, Route} from 'react-router-dom'
import './App.css'

import Home from './pages/Home/Home'
import SearchResult from './pages/SearchResult/SearchResult'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import CategoryInfo from './pages/CategoryInfo/CategoryInfo'

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search/:topic' element={<SearchResult />} />
          <Route path='/product/:idProduct' element={<ProductDetails />} />
          <Route path='/category/:idCategory' element={<CategoryInfo />} />
        </Routes>  
      
    </div>
  );
}

export default App;
