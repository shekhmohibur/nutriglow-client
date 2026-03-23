import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AuthProvider from "./provider/AuthProvider.jsx";
import { RouterProvider } from "react-router";
import Router from "./routes/Router.jsx";
import {
 QueryClient,
 QueryClientProvider
} from "@tanstack/react-query";
import { CartProvider } from "./context/CartContext.jsx";
import { WishlistProvider } from "./context/WishlistContext.jsx";
const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <CartProvider>
            <WishlistProvider>
              <RouterProvider router={Router} />
            </WishlistProvider>
          </CartProvider>
        </AuthProvider>
      </QueryClientProvider>
    </StrictMode>,
);
