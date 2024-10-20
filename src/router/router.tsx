import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Features from "../components/features";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    //loader: rootLoader,
 /*   children: [
      {
        path: "team",
        element: <Team />,
        loader: teamLoader,
      },
    ],
 */
  },
]);

export default router