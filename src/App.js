import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home.js";
import Blogs from "./pages/Blogs/Blogs.js";
import Contact from "./pages/contact/Contact.js";
import Error from "./Components/404/Error.js";
import Login from "./pages/auth/Login/login.js";
import Register from "./pages/auth/Register/register.js";
import Single from "./pages/SingleBlogs/Single.js";
import AboutUs from "./pages/Aboutus/Aboutus.js";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="signin" element={<Login />} />
        <Route path="signup" element={<Register />} />
        <Route path="single" element={<Single />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
