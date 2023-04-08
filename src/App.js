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
import OverView from "./Admin/Overview/overview.js";
import Payment from "./Admin/payment/Payment.js";
import Message from "./Admin/message/Message.js";
import Blog from "./Admin/Blog/Blog.js";
import Appointment from "./Admin/Appointment/Appointment.js";
import Schedule from "./Admin/Schedule/Schedule.js";
import Setting from "./Admin/Setting/Setting.js";
import Patinet from "./Admin/MyPatient/Patinet.js";
import Dash from "./Users/pages/dash.js";
import AppointmentUser from "./Users/pages/Appointment.js";
function App() {
  return (
    <Router>
      <Routes>
        {/* Frontend panel */}
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        {/* <Route path="blogs" element={<Blogs />} /> */}
        <Route path="contact" element={<Contact />} />
        <Route path="signin" element={<Login />} />
        <Route path="signup" element={<Register />} />
        {/* <Route path="single" element={<Single />} /> */}
        <Route path="aboutus" element={<AboutUs />} />
        {/* Doctor Panel */}
        <Route path="overview" element={<OverView />} />
        <Route path="patinet" element={<Patinet />} />
        {/* <Route path="payment" element={<Payment />} /> */}
        {/* <Route path="message" element={<Message />} /> */}
        {/* <Route path="blog" element={<Blog />} /> */}
        <Route path="appointment" element={<Appointment />} />
        {/* <Route path="schedule" element={<Schedule />} /> */}
        {/* <Route path="setting" element={<Setting />} /> */}
        {/* Patinet Panel */}
        {/* <Route path="dashboard" element={<Dash />} /> */}
        {/* <Route path="userAppointment" element={<AppointmentUser />} /> */}
        {/* Page 404 */}
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
