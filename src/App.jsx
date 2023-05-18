import "./App.css";

import { Routes, Route } from "react-router-dom";
import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import Landing from "./components/Pages/Landing";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import UserPage from "./components/Pages/UserPage";
import Forum from "./components/Pages/Forum";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/userPage" element={<UserPage />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
