import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/home/Home"
import Contact from "./pages/Contact"
import Project from "./pages/projects/Project"



const router = createBrowserRouter([
  {
    path: "/",
    Component:Home
  },
  {
    path: "/contact",
    Component: Contact 
  },
  {
    path:"/projects",
    Component:Project
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />,
     {/* <BrowserRouter>  
      <App/>
     </BrowserRouter> */}
  </StrictMode>,
)


