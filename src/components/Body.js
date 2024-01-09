import React from 'react'
import Login from "./Login"
import Browser from "./Browser";

import { RouterProvider,createBrowserRouter } from 'react-router-dom';

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Login/>,
  },
  {
    path:"/browser",
    element:<Browser/>,
  },
]);

const Body = () => {
  return <RouterProvider router={appRouter}/>
};

export default Body;