import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Pages/RootPage/Root.jsx';
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx';
import HomePage from './Pages/HomePage/HomePage.jsx';
import Apps from './Pages/AppsPage/AppsPage.jsx';
import InstallationPage from './Pages/InstallationPage/InstallationPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root ,   // header outlet footer ashse page e
    errorElement: <ErrorPage></ErrorPage>,
    
    children: [           // children jeye outlet e boshbe
      {index:true , Component: HomePage} ,  // dhuktei home page ta eshe thakbe
      {path:'apps' , Component: Apps} ,
      {path:'installation' , Component: InstallationPage} 
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
