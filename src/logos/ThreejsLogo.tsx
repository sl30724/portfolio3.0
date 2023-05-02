import * as THREE from "three";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    threejs: THREE.Mesh;
    Cube096: THREE.Mesh;
  };
  materials: {
    Material_0: THREE.MeshStandardMaterial;
    base_0: THREE.MeshPhysicalMaterial;
  };
};

export function ThreejsLogo(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/3Dthreejs.glb") as GLTFResult;
  const threejs = useRef() as React.MutableRefObject<THREE.Group>;
  useFrame(() => {
    if (threejs.current) {
        threejs.current.position.y = THREE.MathUtils.lerp(threejs.current.position.y, 0.5, 0.05)
    }
});

  return (
    <group {...props} dispose={null} ref={threejs}>
      <group
        position={[0.5, 0.08, 0.07]}
        rotation={[-Math.PI, 0, 0]}
        scale={[0.04, 0.01, 0.01]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.threejs.geometry}
          material={materials.Material_0}
          position={[0, 10.34, 0]}
          rotation={[-2.01, -Math.PI / 2, 0]}
        />
      </group>
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

useGLTF.preload("/models/3Dthreejs.glb");