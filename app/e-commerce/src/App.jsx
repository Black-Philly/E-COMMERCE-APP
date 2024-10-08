import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import ForgetPassword from "./pages/ForgetPassword";
import Signup from "./pages/Signup";


function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/forget password" element={<ForgetPassword />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
