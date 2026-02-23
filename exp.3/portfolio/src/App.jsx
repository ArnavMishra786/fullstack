import { Routes, Route } from "react-router-dom";

import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Navbar from "./com/navbar";

export default function App() {
  return (
    <div className="container">
      <Navbar />

      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />}/>
        </Routes>
        </div>
  )
}