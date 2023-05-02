import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh;
    Text001: THREE.Mesh;
  };
  materials: {
    ["Material.001"]: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
  };
};

export function TSLogo(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/3Dtypescript.glb") as GLTFResult;
  const ts = useRef() as React.MutableRefObject<THREE.Group>;
  useFrame(() => {
    if (ts.current) {
        ts.current.position.y = THREE.MathUtils.lerp(ts.current.position.y, 2, 0.05)
    }
});

  return (
    <group {...props} dispose={null} ref={ts}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials["Material.001"]}
        scale={[0.67, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text001.geometry}
        material={materials["Material.002"]}
        position={[0.04, 0.02, 0.05]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.06}
      />
    </group>
  );
}

useGLTF.preload("/models/3Dtypescript.glb");
