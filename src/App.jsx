import Homepage from "./pages/Homepage.jsx"
import Signup from "./pages/Signup.jsx"
import Login from "./pages/Login.jsx"
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import { Routes, Route } from "react-router-dom"
import "./App.css"
import EditorLayout from "./components/EditorLayout.jsx"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/editorlayout" element={<EditorLayout/>} />
    </Routes>
  );
}