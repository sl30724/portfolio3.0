
import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh;
    Text: THREE.Mesh;
  };
  materials: {
    ["Material.001"]: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
  };
};

export function JSLogo(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/3Djavascript.glb") as GLTFResult;
  const js = useRef() as React.MutableRefObject<THREE.Group>;
  useFrame(() => {
    if (js.current) {
        js.current.position.y = THREE.MathUtils.lerp(js.current.position.y, -0.5, 0.05)
    }
});

  return (
    <group {...props} dispose={null} ref={js}>
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
        geometry={nodes.Text.geometry}
        material={materials["Material.002"]}
        position={[0.04, 0.02, 0.06]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.1}
      />
    </group>
  );
}

useGLTF.preload("/models/3Djavascript.glb");