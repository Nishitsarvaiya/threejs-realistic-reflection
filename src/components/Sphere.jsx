import { useTexture } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { CanvasTexture, RepeatWrapping, SRGBColorSpace } from "three";
import { FlakesTexture } from "three/examples/jsm/textures/FlakesTexture";

export default function Sphere() {
	const mesh = useRef();
	const texture = new CanvasTexture(new FlakesTexture());
	texture.wrapS = RepeatWrapping;
	texture.wrapT = RepeatWrapping;
	texture.repeat.x = 10;
	texture.repeat.y = 6;
	texture.colorSpace = SRGBColorSpace;
	const { viewport } = useThree();

	return (
		<mesh ref={mesh}>
			<sphereGeometry args={[Math.min(viewport.width * 0.4, 2), 64, 64]} />
			<meshPhysicalMaterial
				clearcoat={1}
				clearcoatRoughness={0.1}
				metalness={0.9}
				roughness={0.5}
				color={"#8418ca"}
				normalMap={texture}
				normalScale={[0.15, 0.15]}
			/>
		</mesh>
	);
}
