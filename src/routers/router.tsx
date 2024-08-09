import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Welcome from "../pages/Welcome/Welcome";
import Results from "../pages/Results/Results";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Welcome />,
        index: true,
      },
      {
        path: "/results",
        element: <Results />,
      }
    ]
  }
])

export default router;
