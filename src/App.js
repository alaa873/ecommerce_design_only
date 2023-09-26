import Home from './Page/HomePage/Home';
import NavBar from './Utility/Header/NavBar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HashRouter, Route, Routes } from 'react-router-dom';
import ProductDetailsHome from './Page/ProductDetailsPage/ProductDetailsHome';
import SearchProductsPage from './Page/ProductSearchPage/SearchProductsPage';
import LoginPage from './Page/Auth/LoginPage';
import Register from './Page/Auth/RegisterPage';
import Cart from './Page/Cart/Cart';
import AdminHomePage from './Page/Admin/AdminHomePage';
import AdminProductsPage from './Page/Admin/AdminProductsPage';
import AdminBrandPage from './Page/Admin/AdminBrandPage';
import AdminAddProductPage from './Page/Admin/AdminAddProductPage';
import BrandPage from './Page/BrandPage/BrandPage';
import CategoryPage from './Page/CategoryPage/CategoryPage';
function App() {

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/allcategory' element={<CategoryPage />} />
          <Route path='/productdetails' element={<ProductDetailsHome />} />
          <Route path='/allproducts' element={<SearchProductsPage />} />
          <Route path='/allbrand' element={<BrandPage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<Register />} />
          <Route path="/admin/home" element={<AdminHomePage />} />
          <Route path="/admin/allproducts" element={<AdminProductsPage />} />
          <Route path="/admin/addbrand" element={<AdminBrandPage />} />
          <Route path="/admin/addproduct" element={<AdminAddProductPage />} />
          <Route path='*' element={<p className='mt-5 pt-5'> page not found </p>} />
        </Routes>
      </HashRouter>


    </div>
  );
}

export default App;
