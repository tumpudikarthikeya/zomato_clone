import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home';
import Restaurants from './pages/Restaurnts';
import Restaurant_Details from './pages/Restaurant_Details';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/restaurants" element={<Restaurants/>}/>
        <Route path="/restaurant_details/:id" element={<Restaurant_Details/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
