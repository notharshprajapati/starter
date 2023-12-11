import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import "./index.css";
import App from "./App";
import { ContactShadows, OrbitControls } from "@react-three/drei";
import Effects from "./Effects";
import { Stats } from "@react-three/drei";
import { Environment, Lightformer } from "@react-three/drei";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Canvas
    gl={{ logarithmicDepthBuffer: true, antialias: false }}
    dpr={[1, 1.5]}
    camera={{ position: [0, 0, 15], fov: 25 }}
  >
    <fog attach="fog" args={["black", 2, 100]} />
    <color attach="background" args={["#15151a"]} />
    <ContactShadows
      resolution={128}
      position={[0, 0.001, 0]}
      scale={2}
      opacity={0.5}
      far={2}
    />
    <Environment resolution={512}>
      <Lightformer
        intensity={2}
        rotation-x={Math.PI / 2}
        position={[0, 4, -9]}
        scale={[10, 1, 1]}
      />
      <Lightformer
        intensity={2}
        rotation-x={Math.PI / 2}
        position={[0, 4, -6]}
        scale={[10, 1, 1]}
      />
      <Lightformer
        intensity={2}
        rotation-x={Math.PI / 2}
        position={[0, 4, -3]}
        scale={[10, 1, 1]}
      />
      <Lightformer
        intensity={2}
        rotation-x={Math.PI / 2}
        position={[0, 4, 0]}
        scale={[10, 1, 1]}
      />
      <Lightformer
        intensity={2}
        rotation-x={Math.PI / 2}
        position={[0, 4, 3]}
        scale={[10, 1, 1]}
      />
      <Lightformer
        intensity={2}
        rotation-x={Math.PI / 2}
        position={[0, 4, 6]}
        scale={[10, 1, 1]}
      />
      <Lightformer
        intensity={2}
        rotation-x={Math.PI / 2}
        position={[0, 4, 9]}
        scale={[10, 1, 1]}
      />

      <Lightformer
        intensity={2}
        rotation-y={Math.PI / 2}
        position={[-50, 2, 0]}
        scale={[100, 2, 1]}
      />
      <Lightformer
        intensity={2}
        rotation-y={-Math.PI / 2}
        position={[50, 2, 0]}
        scale={[100, 2, 1]}
      />

      <Lightformer
        form="ring"
        color="red"
        intensity={10}
        scale={2}
        position={[10, 5, 10]}
        onUpdate={(self) => self.lookAt(0, 0, 0)}
      />
    </Environment>
    <Effects />
    <OrbitControls />
    <Suspense fallback={null}>
      <App />
      <Stats />
    </Suspense>
  </Canvas>
);
