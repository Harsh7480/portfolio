import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter } from "react-router";
// import { RouterProvider } from "react-router/dom";
// import About from './pages/about/About.jsx';
// import Services from './pages/services/Services.jsx';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />
//   },
//   {
//     path: "/about",
//     Component: About 
//   },
// ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     {/* <RouterProvider router={router} />, */}
     <BrowserRouter>  
      <App/>
     </BrowserRouter>
  </StrictMode>,
)


