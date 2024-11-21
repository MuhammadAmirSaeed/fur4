import { Text } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useInView } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import dummyImage from '../../Assets/DummyImage.svg';
// import './VideoAndAnimatedText.css';

const VideoAndAnimatedText = () => {
  const textRef = useRef();
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (textRef.current) {
      textRef.current.color = inView ? '#ff0000' : '#ffffff'; 
    }
  }, [inView]);

  return (
    <div className="video-and-text">
      {/* Background Image */}
      <img src={dummyImage} alt="dummy_image" className="video-bg" />

      {/* Animated Text */}
      <div ref={ref} className="canvas-container">
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Text
            ref={textRef}
            fontSize={1.5}
            position={[0, 0, 0]}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed ab voluptatibus quam, optio odio ratione suscipit accusamus magni fugiat, necessitatibus porro similique eligendi, aut adipisci beatae dolorem odit incidunt perferendis?
          </Text>
        </Canvas>
      </div>

      {/* Additional Content */}
      <div className="content">
        <h1>Scroll to see the animation</h1>
      </div>
    </div>
  );
};

export default VideoAndAnimatedText;
