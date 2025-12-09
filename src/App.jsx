import Homepage from "./pages/Homepage.jsx"
import Signup from "./pages/Signup.jsx"
import Login from "./pages/Login.jsx"
import { Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}