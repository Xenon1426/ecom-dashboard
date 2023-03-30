import Nav from './components/Nav.js'
import Footer from './components/Footer.js';
import SignUp from './components/SignUp.js';
import PrivateComponent from './components/PrivateComponent.js';
import Login from './components/Login.js'
import AddProduct from './components/AddProduct.js';
import ProductList from './components/ProductList.js';
import UpdateProduct from './components/UpdateProduct'
import Profile from './components/Profile'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route element={<PrivateComponent />}>
        <Route path="/" element={<ProductList />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/update/:id" element={<UpdateProduct />} />
        <Route path="/update" element={<UpdateProduct />} />
        <Route path="/logout" element={<h1>Logout Component</h1>} />
        <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
