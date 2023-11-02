import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { PointLightHelper } from "three";

export default function Lights() {
	const pointLight = useRef(null);
	// useHelper(pointLight, PointLightHelper, 0.1, "#ffffff");

	return (
		<>
			<pointLight color={"#ffffff"} intensity={50} position={[3, 2, 5]} ref={pointLight} />
		</>
	);
}
