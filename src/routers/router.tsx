import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Welcome from "../pages/Welcome/Welcome";

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
    ]
  }
])

export default router;
