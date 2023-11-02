import { Environment, OrbitControls, PerspectiveCamera, useTexture } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Lights from "./Lights";
import Sphere from "./Sphere";
import { SRGBColorSpace } from "three";

export default function World() {
	return (
		<Canvas gl={{ toneMapping: 4, outputColorSpace: SRGBColorSpace, toneMappingExposure: 1.25 }}>
			<Environment files="/cayley_interior_2k.hdr" />
			<OrbitControls />
			<PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} near={0.1} far={100} />
			<Lights />
			<Sphere />
		</Canvas>
	);
}
