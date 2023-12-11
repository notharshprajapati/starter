import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { applyProps } from "@react-three/fiber";
import { MeshStandardMaterial } from "three";

export function Drone(props) {
  const { nodes, materials } = useGLTF("/drone.glb");
  applyProps(materials.red, {
    emissiveIntensity: 5,
    toneMapped: false,
  });
  applyProps(materials.blue, {
    emissiveIntensity: 5,
    toneMapped: false,
  });
  const glassMaterial = new MeshStandardMaterial({
    color: "#000", // Set the color of the glass
    metalness: 1,
    roughness: 0.5,
    transparent: true, // Enable transparency
    opacity: 0.9, // Set the opacity level (adjust as needed)
  });
  //refs
  const body = useRef();
  const bodRot = useRef();
  const wing1 = useRef();
  const wing2 = useRef();
  const wing3 = useRef();
  const wing4 = useRef();

  return (
    <group {...props} dispose={null} ref={body}>
      <group ref={bodRot}>
        <mesh
          castShadow
          geometry={nodes.body.geometry}
          material={materials.body}
        >
          <mesh
            geometry={nodes.blue.geometry}
            material={materials.blue}
            position={[0, 0.246, -0.165]}
          />
          <mesh geometry={nodes.cam.geometry} material={materials.cam}>
            <mesh
              geometry={nodes.lens.geometry}
              material={materials.metal}
              position={[0, 0.463, 0.199]}
            />
          </mesh>
          <mesh
            geometry={nodes.legs.geometry}
            material={materials.metal}
            position={[0, 0.246, -0.165]}
          />
          <group position={[0, 0.377, -0.024]}>
            <mesh
              geometry={nodes.motors_1.geometry}
              material={materials.metal}
            />
            <mesh
              geometry={nodes.motors_2.geometry}
              material={materials.gold}
            />
            <group position={[0.479, 0.047, -0.4]} ref={wing1}>
              <mesh
                geometry={nodes.wing1_1.geometry}
                material={materials.fan}
              />
              <mesh
                geometry={nodes.wing1_2.geometry}
                material={materials.gold}
              />
            </group>
            <group position={[-0.481, 0.047, -0.4]} ref={wing2}>
              <mesh
                geometry={nodes.wing2_1.geometry}
                material={materials.fan}
              />
              <mesh
                geometry={nodes.wing2_2.geometry}
                material={materials.gold}
              />
            </group>
            <group position={[-0.481, 0.047, 0.4]} ref={wing3}>
              <mesh
                geometry={nodes.wing3_1.geometry}
                material={materials.fan}
              />
              <mesh
                geometry={nodes.wing3_2.geometry}
                material={materials.gold}
              />
            </group>
            <group position={[0.481, 0.047, 0.4]} ref={wing4}>
              <mesh
                geometry={nodes.wing4_1.geometry}
                material={materials.fan}
              />
              <mesh
                geometry={nodes.wing4_2.geometry}
                material={materials.gold}
              />
            </group>
          </group>
          <mesh geometry={nodes.red.geometry} material={materials.red} />
          <mesh geometry={nodes.tail_1.geometry} material={materials.cam} />
          <mesh geometry={nodes.tail_2.geometry} material={glassMaterial} />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/drone.glb");
