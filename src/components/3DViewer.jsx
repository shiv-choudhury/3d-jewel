// JewelryViewer.jsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const JewelryModel = ({ url }) => {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={1.5} />;
};

const JewelryViewer = ({ modelUrl }) => (
  <Canvas camera={{ position: [0, 0, 5] }}>
    <ambientLight intensity={1} />
    <Environment preset="studio" />
    <OrbitControls enableZoom />
    <Suspense fallback={null}>
      <JewelryModel url={modelUrl} />
    </Suspense>
  </Canvas>
);

export default JewelryViewer;
