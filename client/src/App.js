import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Policy from "./pages/Policy.js";
import PageNotFound from "./pages/PageNotFound.js";
import Register from "./pages/Auth/Register.js";
import Login from "./pages/Auth/Login.js";
import Dashboard from "./pages/user/Dashboard.js";
import PrivateRoute from "./components/Routes/Private.js";
import ForgotPassword from "./pages/Auth/ForgotPassword.js";
import AdminRoute from "./components/Routes/AdminRoute.js";
import AdminDashboard from "./pages/Admin/AdminDashboard.js";
import CreateCategory from "./pages/Admin/CreateCategory.js";
import Users from "./pages/Admin/User.js";
import CreateProduct from "./pages/Admin/CreateProduct.js";
import Orders from "./pages/user/Order.js";
import Profile from "./pages/user/Profile.js";
import Products from "./pages/Admin/Product.js";
import UpdateProduct from "./pages/Admin/UpdateProduct.js";
import Search from "./pages/Search.js";
import ProductDetails from "./pages/ProductDetails.js";
import CartPage from "./pages/CartPage.js";




function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/product/:slug" element={<ProductDetails></ProductDetails>} />
        <Route path="/search" element={<Search></Search>} />
        <Route path="/cart" element={<CartPage></CartPage>} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
       
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/product/:slug" element={<UpdateProduct/>} />
          <Route path="admin/product" element={<Products />} />
          <Route path="admin/users" element={<Users />} />
        </Route>

        <Route path="/register" element={<Register></Register>} />
        <Route
          path="/forgot-password"
          element={<ForgotPassword></ForgotPassword>}
        />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/policy" element={<Policy></Policy>} />
        <Route path="*" element={<PageNotFound></PageNotFound>} />
      </Routes>
    </>
  );
}

export default App;
