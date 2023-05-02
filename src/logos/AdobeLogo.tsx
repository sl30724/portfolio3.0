import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Curve: THREE.Mesh;
    Cube096: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
    base_0: THREE.MeshPhysicalMaterial;
  };
};

export function AdobeLogo(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/3Dadobe.glb") as GLTFResult;
  const adobe = useRef() as React.MutableRefObject<THREE.Group>;
  useFrame(() => {
    if (adobe.current) {
        adobe.current.position.y = THREE.MathUtils.lerp(adobe.current.position.y, 0, 0.05)
    }
});

  return (
    <group {...props} dispose={null} ref={adobe}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve.geometry}
        material={materials.Material}
        position={[0.6, 0, 0]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[2, 1.05, 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube096.geometry}
        material={materials.base_0}
        scale={[0.67, 1, 1]}
      />
    </group>
  );
}

useGLTF.preload("/models/3Dadobe.glb");