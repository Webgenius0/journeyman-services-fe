import { Outlet, ScrollRestoration, useSearchParams } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import useAxiosPublic from "@/hooks/api/useAxiosPublic";
import { useTravelDetails } from "@/contexts/TravelDetailsProvider";

const Layout = () => {
  const [searchParams] = useSearchParams();
  const brokerCode = searchParams.get("code");

  const axiosPublic = useAxiosPublic();
  const { setBroker } = useTravelDetails();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (brokerCode) {
      setLoading(true);
      axiosPublic
        .get(`/broker/${brokerCode}`)
        .then((response) => {
          if (response.data.status) {
            setBroker(response.data.data);
          } else {
            setError("Failed to fetch broker details");
          }
        })
        .catch(() => setError("Error fetching broker details"))
        .finally(() => setLoading(false));
    }
  }, [brokerCode, setBroker, axiosPublic]);

  return (
    <>
      <div className="font-poppins bg-[#FEFEFE]">
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>
      <div>
      <Outlet />
      </div>
        <Footer />
        <ScrollRestoration />
        <Toaster />
      </div>
    </>
  );
};

export default Layout;
