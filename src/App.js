import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './Pages/Home/HomePage';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import CategoryPage from './Pages/Categories/CategoriesPage';
import ShoppingCartPage from './Pages/ShoppnigCart/ShoppingCartPage';
import UniversalProductPage from './Pages/OneCategory/OneCategoryPage';
import SingleProductPage from './Pages/Product/SingleProductPage';
import Error from './Pages/404_page/404_page';

export const BASE_URL = 'https://backend-garden.onrender.com/'

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/categories/all' element={<CategoryPage/>}/>
          <Route path='/categories/:id' element={<UniversalProductPage type='categories'/>} ></Route>
          <Route path='/products/all' element={<UniversalProductPage type='all'/>} ></Route>
          <Route path='/product/:id' element={<SingleProductPage/>}></Route>
          <Route path='/products/sales' element={<UniversalProductPage type='sale'/>}></Route>
          <Route path='/shopping_cart' element={<ShoppingCartPage />}></Route>
          <Route path='*' element={<Error/>}></Route>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
