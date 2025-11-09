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
import AppDetailsPage from './Pages/AppDetailsPage/AppDetailsPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root ,   // header outlet footer ashse page e
    errorElement: <ErrorPage></ErrorPage>,
    
    children: [           // children jeye outlet e boshbe
      {index:true , 
      loader:()=>fetch('/public/TrandingAppsData.json'),
      Component: HomePage} ,  // dhuktei HomePage component ta eshe thakbe

      {path:'apps' ,
      loader:() => fetch("/public/AppsData.json") ,
      Component: Apps} ,

      {path:'installation' , Component: InstallationPage} ,
      // {path:'appsdetailspage' , Component: AppDetailsPage} ,

      {path:"appsdetailspage/:id" ,       // Dynamic Route, params hishebe :id er value e jai mainly
       loader:() => fetch("/public/AppsData.json") ,
       Component:AppDetailsPage
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
