import React, { useEffect, useRef } from "react";
import { Canvas, useThree, useLoader, extend } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { Text3D, Center } from "@react-three/drei";

import * as THREE from "three";
import helvetiker from "./fonts/helvetiker_regular.typeface.json";
extend({ TextGeometry });

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    controls.minDistance = 3;
    controls.maxDistance = 20;
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;
};
function Text3d() {
  const textMesh = useRef();
  const font = new FontLoader().parse(helvetiker);
  const textOptions = {
    font,
    size: 4,
    height: 4,
  };
  const map = useLoader(THREE.TextureLoader, "/static/color.png");

  return (
    <mesh position={[-15,0,0]}>
      <textGeometry
        ref={textMesh}
        attach="geometry"
        args={["Balakrishna", textOptions]}

      />
      <meshMatcapMaterial matcap={map} /> 
     
    </mesh>
  );
}
export default function Textmodel() {
  return (
    <Canvas>
      <CameraController />
      <ambientLight />
      <Text3d />
    </Canvas>
  );
}
