import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./Pages/App.tsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Landing from "./Pages/Landing.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<App/>}/>
        
        <Route path="/Landing" element={<Landing/>}/>
      </Routes>
    </StrictMode>
  </BrowserRouter>,
);
