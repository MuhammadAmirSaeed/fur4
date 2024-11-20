import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import React,{Suspense} from 'react'

import brushModel from '../Assets/Models/短款毛刷-绿.glb'
import { Canvas } from '@react-three/fiber'
const Brush = () => {
    const brush = useGLTF(brushModel);
    console.log('brush is >>>>>', brush);
    brush.scene.rotation.set(0, Math.PI / 2, 0);
  
    return <primitive object={brush.scene} scale={6.5} />;
  };


const RotatingAnimation = () => {
    return (
        <Canvas
        shadows
        frameloop='demand'
        dpr={[1,2]}
        gl={{preserveDrawingBuffer:true}}
        camera={{
            fov:45,
            near:1,
            far:200,
            position: [0, 0, 1],
            
        }}
        >
            <Suspense   fallback={
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="gray" />
          </mesh>
        }>
            <OrbitControls
            autoRotate
            autoRotateSpeed={2}
            enableZoom={false}
            maxPolarAngle={Math.PI}
            minPolarAngle={0}
            />
            <Brush/>
            <Preload all/>
            </Suspense>

        </Canvas>
    )

}

export default RotatingAnimation