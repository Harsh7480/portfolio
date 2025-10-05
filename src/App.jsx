import { Route, Routes } from "react-router"

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