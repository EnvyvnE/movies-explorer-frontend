import React from 'react'
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {

  return (
    <Route>
      {() =>
        <Component {...props} />
      }
    </Route>
  );
};

export default ProtectedRoute;