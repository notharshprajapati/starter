import React from "react";
import { Drone } from "./Drone";
import { Reflector } from "@react-three/drei";

function App() {
  return (
    <>
      <Drone />
      <Ground />
      <ambientLight intensity={0.5} />
      <spotLight position={[0, 10, 0]} intensity={0.3} />
      <directionalLight position={[-50, 0, -40]} intensity={0.7} />
    </>
  );
}

export default App;
function Ground() {
  return (
    <Reflector
      blur={[1, 1]}
      resolution={512 * 4}
      args={[10, 10]}
      mirror={1}
      mixBlur={2}
      mixStrength={50}
      rotation={[-Math.PI / 2, 0, Math.PI / 2]}
    >
      {(Material, props) => (
        <Material color="#111" roughness={0.25} {...props} />
      )}
    </Reflector>
  );
}
