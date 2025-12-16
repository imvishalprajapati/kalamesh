import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

interface ModelProps {
    url: string;
}

function Model({ url }: ModelProps) {
    const { scene } = useGLTF(url);
    return <primitive object={scene} />;
}

interface ThreeJSViewerProps {
    src: string;
}

export default function ThreeJSViewer({ src }: ThreeJSViewerProps) {
    return (
        <div className="w-full h-[600px] bg-slate-100 dark:bg-slate-900 rounded-lg overflow-hidden relative">
            <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
                <Suspense fallback={null}>
                    <Stage environment="city" intensity={0.6}>
                        <Model url={src} />
                    </Stage>
                </Suspense>
                <OrbitControls autoRotate />
            </Canvas>
            <div className="absolute bottom-4 left-4 bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                Click & Drag to Rotate
            </div>
        </div>
    );
}
