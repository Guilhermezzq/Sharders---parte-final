import { useFrame } from "@react-three/fiber";
import { hover } from "@testing-library/user-event/dist/hover";
import { useRef } from "react";

import * as THREE from "three";



const Scene = () => {

  const cubeRef = useRef();

  const { lerp } = THREE.MathUtils;

  useFrame(() => {
    cubeRef.current.position.x = lerp(cubeRef.current.position.x, 1, 0.01);

    cubeRef.current.material.distort = lerp(cubeRef.current.material.distort,
    hover ? 0.4 : 0,
    hover ? 0.05 : 0.01
    );
  })


  return (
    <>

    

      <mesh  ref={cubeRef} >
        <boxGeometry />
        <meshBasicMaterial color="#F76E53" />
      </mesh>

      
    </>
  );
};

export default Scene;
