import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import InformationInput from "@/pages/InformationInput";
import AboutUs from "@/pages/AboutUs";
import ContactUs from "@/pages/ContactPage";
import Profile from "@/pages/Profile";
import TermsAndCondition from "@/pages/TermsAndCondition";
import PrivacyStatement from "@/pages/PrivacyStatement";
import Signin from "@/pages/Signin";
import PartyDetails from "@/pages/PartyDetails";
import CheckOut from "@/pages/CheckOut";
import ErrorPage from "@/pages/ErrorPage";
import Success from "@/pages/Success";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "terms",
        element: <TermsAndCondition />,
      },
      {
        path: "privacy",
        element: <PrivacyStatement />,
      },
      {
        path: "/travel-insurance",
        element: <InformationInput />,
      },
      {
        path: "/party-details",
        element: <PartyDetails />,
      },
      {
        path: "/checkout",
        element: <CheckOut />,
      },
      {
        path: "/success",
        element: <Success />,
      },
    ],
  },
]);

export default router;
