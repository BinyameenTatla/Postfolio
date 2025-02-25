import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Home } from './Home.jsx';
import { Navbar } from './Navbar.jsx';
import { Project } from './Project.jsx';
import { Contacts } from './Contacts.jsx';
import { Footer } from './Footer.jsx';
import { Services } from './Services.jsx';


export const Routers = () => {
  const router = createBrowserRouter([ // Changed 'Router' to 'router'
    {
      path: "/",
      element: <Applayout />,  // Use Applayout as the wrapper for layout
      children: [
        {
          path: "/",
          element: <Home />  // Home route
        },
        {
          path: "/services",  // Changed to lowercase '/services'
          element: <Services />  // Services route
        },
        {
          path: "/projects",  // Changed to lowercase '/projects'
          element: <Project />  // Project route
        },
        {
          path: "/contacts",  // Changed to lowercase '/contacts'
          element: <Contacts />  // Contacts route
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;  // Use 'router' instead of 'Router'
};

// Define your layout component (Applayout)
const Applayout = () => {
  return (
    <>
      <Navbar />  {/* Navbar */}
      <Outlet />  {/* This renders the nested routes */}
      <Footer />  {/* Footer */}
    </>
  );
};
