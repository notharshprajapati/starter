import React from "react";
import { Drone } from "./Drone";
import { Environment, PerspectiveCamera, Plane } from "@react-three/drei";

function App() {
  return (
    <>
      <Environment background={true} files={"assets/textures/envmap.hdr"} />
      <PerspectiveCamera makeDefault position={[0, 1, 5]} />
      <Drone castShadow receiveShadow />
      <pointLight intensity={1} position={[0, 2, 0]} castShadow />
      <Plane receiveShadow scale={[10, 10, 10]} rotation={[-Math.PI / 2, 0, 0]}>
        <meshStandardMaterial />
      </Plane>
    </>
  );
}

export default App;
