
import * as THREE from "three";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
    nodes: {
        Cube096: THREE.Mesh;
        Cylinder030: THREE.Mesh;
        Cube097: THREE.Mesh;
        Cube095: THREE.Mesh;
        Cube098: THREE.Mesh;
        NurbsPath001: THREE.Mesh;
        Cube020: THREE.Mesh;
        Cube023: THREE.Mesh;
        Cube024: THREE.Mesh;
        Cube025: THREE.Mesh;
    };
    materials: {
        base_0: THREE.MeshPhysicalMaterial;
        ["Material.030"]: THREE.MeshPhysicalMaterial;
    };
};

export function GithubLogo(props: JSX.IntrinsicElements["group"]) {
    const { nodes, materials } = useGLTF("/models/3Dgithub.glb") as GLTFResult;
    const github = useRef() as React.MutableRefObject<THREE.Group>;
    useFrame(() => {
        if (github.current) {
            github.current.position.y = THREE.MathUtils.lerp(github.current.position.y, 1.5, 0.05)
        }
    });

    return (
        <group {...props} dispose={null} ref={github}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube096.geometry}
                material={materials.base_0}
                scale={[0.67, 1, 1]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder030.geometry}
                material={materials["Material.030"]}
                position={[0.71, -0.32, -0.24]}
                scale={0.84}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube097.geometry}
                material={materials["Material.030"]}
                position={[0.74, 0.59, 0.13]}
                rotation={[0.51, 0, Math.PI]}
                scale={[-0.04, -0.13, -0.13]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube095.geometry}
                material={materials["Material.030"]}
                position={[0.74, 0.59, -0.62]}
                rotation={[2.63, 0, 0]}
                scale={[-0.04, -0.13, -0.13]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube098.geometry}
                material={materials["Material.030"]}
                position={[0.72, 0.24, -0.24]}
                scale={[0.16, 0.45, 0.45]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.NurbsPath001.geometry}
                material={materials["Material.030"]}
                position={[0.73, -0.27, 0.19]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                scale={0.16}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube020.geometry}
                material={materials["Material.030"]}
                position={[0.74, -0.19, 0.04]}
                rotation={[-2.9, 0, Math.PI / 2]}
                scale={[0.01, 0.03, 0.03]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube023.geometry}
                material={materials["Material.030"]}
                position={[0.74, -0.2, 0.12]}
                rotation={[3.13, 0, Math.PI / 2]}
                scale={[0.01, 0.03, 0.02]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube024.geometry}
                material={materials["Material.030"]}
                position={[0.74, -0.18, 0.21]}
                rotation={[2.75, 0, Math.PI / 2]}
                scale={[0.01, 0.03, 0.02]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube025.geometry}
                material={materials["Material.030"]}
                position={[0.74, -0.13, 0.28]}
                rotation={[2.51, 0, Math.PI / 2]}
                scale={[0.01, 0.02, 0.02]}
            />
        </group>
    );
}

useGLTF.preload("/models/3Dgithub.glb");