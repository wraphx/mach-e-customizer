import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber"
import { ContactShadows, Environment, Lightformer, OrbitControls, Loader } from "@react-three/drei"

import { CustomizationProvider } from "./context/Customization"
import Configurator from "./components/Configurator";
import { MustangMach } from "./vehicles/MustangMach";

export default function App() {

  return (

    <CustomizationProvider>
      <div className="App">
      <Loader />
      <Canvas camera={{ position: [-10, 40, 30], fov:35 }}>
          <color attach="background" args={['grey']} />
          <Suspense fallback={null}>
          <MustangMach scale={1.5} position={[0, -0.2, 0]} />
          </Suspense>
          <hemisphereLight intensity={0.5} />
          <ContactShadows position={[0, -.16, 0]} scale={40} blur={1.5} opacity={1} far={20} />
          <ContactShadows position={[0, -0.1, 0.0]} opacity={2.75} scale={30} blur={2.5} far={0.8} />
          <ambientLight intensity={0.7} />
          <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />

          {/* <Environment preset="city" /> */}
          <Environment preset="sunset" background ground={{ height: 30, radius: 190, scale: 100 }} backgroundBlurriness={0} backgroundIntensity={10}  environmentIntensity={30}>
           
          </Environment>
          
          {/* <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={true} enablePan={false} /> */}
          <OrbitControls enableRotate enablePan={false} enableZoom={true}  minPolarAngle={Math.PI / 2.8} maxPolarAngle={Math.PI / 2.1} />
        </Canvas>
        <Configurator />
      </div>

    </CustomizationProvider>

  )
}

