import { Route, Routes } from "react-router"
import Home from "./pages/home/Home"
import Contact from "./pages/Contact"
import Project from "./pages/projects/Project"

function App() {
  

  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>} ></Route>
      <Route path="/contact" element={<Contact/>} ></Route>
      <Route path="/projects" element={<Project/>} ></Route>
     </Routes>
    </>
  )
}

export default App