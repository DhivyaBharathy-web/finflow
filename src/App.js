import "./App.css";
import Header from "./components/common/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/about/About";
import CourseHome from "./components/allcourses/CourseHome";
import Dashboard from "./components/dashboard/Dashboard";
import Features from "./components/Features/features";
import Blog from "./components/benefits/Benefits";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";
import SupportedConversions from "./components/SupportedConversations/SupportedConversions";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<CourseHome />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/features" element={<Features />} />
          <Route path="/benefits" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/supported-conversions" element={<SupportedConversions />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
