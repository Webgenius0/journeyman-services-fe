import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TravelDetailsProvider } from "./contexts/TravelDetailsProvider";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TravelDetailsProvider>
    <QueryClientProvider client={queryClient}>
      {" "}
      <RouterProvider router={router} />
    </QueryClientProvider>
    </TravelDetailsProvider>
  </StrictMode>
);
