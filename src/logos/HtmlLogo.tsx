import * as THREE from "three";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cube009: THREE.Mesh;
    Curve003: THREE.Mesh;
    Curve007: THREE.Mesh;
    Curve008: THREE.Mesh;
  };
  materials: {
    ["base_0.004"]: THREE.MeshPhysicalMaterial;
    ["SVGMat.023"]: THREE.MeshStandardMaterial;
    ["SVGMat.022"]: THREE.MeshPhysicalMaterial;
    ["SVGMat.026"]: THREE.MeshStandardMaterial;
  };
};

export function HtmlLogo(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/3Dhtml.glb") as GLTFResult;
  const html = useRef() as React.MutableRefObject<THREE.Group>;
  useFrame(() => {
    if (html.current) {
        html.current.position.y = THREE.MathUtils.lerp(html.current.position.y, 1, 0.05)
    }
});
  return (
    <group {...props} dispose={null} ref={html}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={materials["base_0.004"]}
        scale={[0.67, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve003.geometry}
        material={materials["SVGMat.023"]}
        position={[0.49, -0.74, 0.74]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={14.21}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve007.geometry}
        material={materials["SVGMat.022"]}
        position={[0.49, -0.74, 0.74]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={14.21}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve008.geometry}
        material={materials["SVGMat.026"]}
        position={[0.68, -0.74, 0.74]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={14.21}
      />
    </group>
  );
}

useGLTF.preload("/models/3Dhtml.glb");