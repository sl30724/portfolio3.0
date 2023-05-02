
import * as THREE from "three";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cube101: THREE.Mesh;
    Sphere009: THREE.Mesh;
    BezierCircle: THREE.Mesh;
    BezierCircle001: THREE.Mesh;
    BezierCircle002: THREE.Mesh;
  };
  materials: {
    base_0: THREE.MeshPhysicalMaterial;
    ["Material.052"]: THREE.MeshPhysicalMaterial;
  };
};

export function ReactLogo(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/3Dreact.glb") as GLTFResult;
  const react = useRef() as React.MutableRefObject<THREE.Group>;

  useFrame(() => {
    if (react.current) {
        react.current.position.y = THREE.MathUtils.lerp(react.current.position.y, 0.75, 0.05)
    }
});

  return (
    <group {...props} dispose={null} ref={react}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube101.geometry}
        material={materials.base_0}
        scale={[0.67, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere009.geometry}
        material={materials["Material.052"]}
        position={[0.72, 0.05, 0]}
        rotation={[1.05, -0.12, 0.01]}
        scale={0.17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCircle.geometry}
        material={materials["Material.052"]}
        position={[0.72, 0.05, 0]}
        rotation={[1.05, -0.12, 0.01]}
        scale={[0.32, 0.68, 0.68]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCircle001.geometry}
        material={materials["Material.052"]}
        position={[0.72, 0.05, 0]}
        rotation={[2.15, -0.04, 0.11]}
        scale={[0.41, 0.68, 0.68]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCircle002.geometry}
        material={materials["Material.052"]}
        position={[0.72, 0.05, 0]}
        rotation={[3.08, 0.07, -3.04]}
        scale={[0.35, 0.68, 0.68]}
      />
    </group>
  );
}

useGLTF.preload("/models/3Dreact.glb");