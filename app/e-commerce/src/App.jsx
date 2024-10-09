import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import ForgetPassword from "./pages/ForgetPassword";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>

          <Route path="/home" element={<Home />}/> 
          <Route path="/login" element={<Login />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/shopping-cart" element={<Cart />} />
          <Route path="/profile" element={ <Profile/>} />
          
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
