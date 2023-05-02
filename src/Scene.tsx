import { Suspense } from "react";
import { Environment, ContactShadows, Float } from "@react-three/drei";
import { FigmaLogo } from "./logos/FigmaLogo";
import { ReactLogo } from "./logos/ReactLogo";
import { BlenderLogo } from "./logos/BlenderLogo";
import { ThreejsLogo } from "./logos/ThreejsLogo";
import { TSLogo } from "./logos/TypescriptLogo";
import { AdobeLogo } from "./logos/AdobeLogo";
import { JSLogo } from "./logos/JSLogo";
import { GithubLogo } from "./logos/GithubLogo";
import { HtmlLogo } from "./logos/HtmlLogo";

export default function Scene() {
    return (
        <Suspense fallback={null}>

            <Float speed={1.5} rotationIntensity={0.6} floatIntensity={1} floatingRange={[-1, 0]}>
                <FigmaLogo position={[1.5, 60, -6.5]} rotation={[0, -Math.PI / 2, 0]} />
                <ReactLogo position={[3, 100, -3]} rotation={[0, -Math.PI / 2, 0]} />
                <ThreejsLogo position={[2, 140, 0]} rotation={[0, -Math.PI / 2, 0]} />
                <BlenderLogo position={[7.5, 180, 0]} rotation={[0, -Math.PI / 2, 0]} />
                <TSLogo position={[5, 260, -5]} rotation={[0, -Math.PI / 2, 0]} scale={15} />
                <JSLogo position={[5.5, 300, 2]} rotation={[0, -Math.PI / 2, 0]} scale={15} />
                <AdobeLogo position={[-1, 360, 0]} rotation={[0, -Math.PI / 2, 0]} />
                <GithubLogo position={[0, 400, -5]} rotation={[0, -Math.PI / 2, 0]} />
                <HtmlLogo position={[-2, 440, -4]} rotation={[0, -Math.PI / 2, 0]} />
            </Float>

            <Environment preset={"city"} resolution={256} />
            <ContactShadows position={[0, -3, 0]} opacity={0.5} scale={40} blur={1} far={10} resolution={256} color={"#E6DEFF"} />
        </Suspense>
    )
};