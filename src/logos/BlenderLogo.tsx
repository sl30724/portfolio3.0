
import * as THREE from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cube005: THREE.Mesh;
    Curve006: THREE.Mesh;
    Curve007: THREE.Mesh;
    Curve008: THREE.Mesh;
  };
  materials: {
    base_0: THREE.MeshPhysicalMaterial;
    ["SVGMat.004"]: THREE.MeshStandardMaterial;
    ["SVGMat.012"]: THREE.MeshPhysicalMaterial;
    ["SVGMat.011"]: THREE.MeshPhysicalMaterial;
  };
};

export function BlenderLogo(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/3Dblender.glb") as GLTFResult;
  const blender = useRef() as React.MutableRefObject<THREE.Group>;
  useFrame(() => {
    if (blender.current) {
        blender.current.position.y = THREE.MathUtils.lerp(blender.current.position.y, 0.75, 0.05)
    }
});
  return (
    <group {...props} dispose={null} ref={blender}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials.base_0}
        scale={[0.67, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve006.geometry}
        material={materials["SVGMat.004"]}
        position={[0.68, 0.03, -0.25]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[27.17, 14.93, 27.17]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve007.geometry}
        material={materials["SVGMat.012"]}
        position={[0.68, 0.04, -0.28]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={24.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve008.geometry}
        material={materials["SVGMat.011"]}
        position={[0.68, 0.08, -0.16]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[27.17, 34.79, 27.17]}
      />
    </group>
  );
}

useGLTF.preload("/models/3Dblender.glb");