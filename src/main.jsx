import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import "./index.css";
import App from "./App";
import { OrbitControls } from "@react-three/drei";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Canvas shadows>
    <Suspense fallback={null}>
      <App />
    </Suspense>
    <OrbitControls />
  </Canvas>
);
