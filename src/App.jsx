import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Order from "./Pages/Order/Order";
import Cart from "./Pages/Cart/Cart";
import Nopage from "./Pages/Nopage/Nopage";
import Mystate from "./Context/Mystate";
import Allproduct from "./Pages/Allproduct/Allproduct";
import Login from "./Pages/registation/Login";
import Signup from "./Pages/registation/Signup";
import Productinfo from "./Pages/productInfo/Productinfo";
import Dashboard from "./Pages/Admin/dashboard/Dashboard";
import Addproduct from "./Pages/Admin/pages/Addproduct";
import UpdatedProduct from "./Pages/Admin/pages/UpdatedProduct";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <Mystate>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/order"
            element={
              <ProtectedRoute>
                <Order />
              </ProtectedRoute>
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRouteForAdmin>
                <Dashboard />
              </ProtectedRouteForAdmin>
            }
          />
          <Route path="/*" element={<Nopage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/allproducts" element={<Allproduct />} />
          <Route path="/productinfo/:id" element={<Productinfo />} />
          <Route
            path="/addproduct"
            element={
              <ProtectedRouteForAdmin>
                <Addproduct />
              </ProtectedRouteForAdmin>
            }
          />
          <Route
            path="/updatedproduct"
            element={
              <ProtectedRouteForAdmin>
                <UpdatedProduct />
              </ProtectedRouteForAdmin>
            }
          />
        </Routes>
        <ToastContainer />
      </Router>
    </Mystate>
  );
}

export default App;

//  protected Routes

export const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem('user');

  if (user) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

// protected route for admin

export const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));

  if (admin.user.email === "saimshahsadiq@gmail.com") {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};
