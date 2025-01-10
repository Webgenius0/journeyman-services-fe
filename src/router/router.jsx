import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import InformationInput from "@/pages/InformationInput";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/information-input",
        element: <InformationInput />,
      },
    ],
  },
]);

export default router;
