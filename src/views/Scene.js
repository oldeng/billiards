import React, { useRef } from 'react';
import { useThree } from 'react-three-fiber';

import Light from '../components/Light';
import PoolTable from '../components/PoolTable';

import Constants from '../utils/Constants';
import Cue from '../components/Cue';
import PoolBall from '../components/PoolBall';

import zero from '../assets/textures/0.png';
import one from '../assets/textures/1.png';
import two from '../assets/textures/2.png';
import three from '../assets/textures/3.png';
import four from '../assets/textures/4.png';
import five from '../assets/textures/5.png';
import six from '../assets/textures/6.png';
import seven from '../assets/textures/7.png';
import eight from '../assets/textures/8.png';
import nine from '../assets/textures/9.png';
import ten from '../assets/textures/10.png';
import eleven from '../assets/textures/11.png';
import twelve from '../assets/textures/12.png';
import thirteen from '../assets/textures/13.png';
import fourteen from '../assets/textures/14.png';
import fifteen from '../assets/textures/15.png';

function Scene() {
  const cueRef = useRef();
  const zeroBallRef = useRef();
  const oneBallRef = useRef();
  const twoBallRef = useRef();
  const threeBallRef = useRef();
  const fourBallRef = useRef();
  const fiveBallRef = useRef();
  const sixBallRef = useRef();
  const sevenBallRef = useRef();
  const eightBallRef = useRef();
  const nineBallRef = useRef();
  const tenBallRef = useRef();
  const elevenBallRef = useRef();
  const twelveBallRef = useRef();
  const thirteenBallRef = useRef();
  const fourteenBallRef = useRef();
  const fifteenBallRef = useRef();

  const { camera, gl } = useThree();

  gl.setClearColor(0x151515, 1);
  gl.shadowMap.enabled = false;

  camera.fov = 45;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.near = 0.1;
  camera.far = 1000;

  camera.up.set(0, 0, 1);
  camera.position.set(-5, 7, 5);

  (() => zeroBallRef.current && camera.lookAt(zeroBallRef.current.position))();
  (() =>
    zeroBallRef.current &&
    camera.position.set(
      zeroBallRef.current.position.x,
      zeroBallRef.current.position.y,
      45
    ))();

  // const cameraHelper = new THREE.CameraHelper(camera);
  // scene.add(cameraHelper);

  return (
    <>
      {Constants.pointLightPositions.map((pos, i) => {
        const idx = i;
        return (
          <Light
            key={idx}
            type='PointLight'
            color={0xffffff}
            intensity={0.4}
            distance={100}
            position={pos}
            castShadow
          />
        );
      })}
      <Light
        type='AmbientLight'
        color={0xffffff}
        intensity={0.2}
        position={[0, 0, 0]}
      />
      <PoolTable />
      <PoolBall setRef={zeroBallRef} position={[0, -16, 0]} textureURL={zero} />
      <PoolBall
        setRef={oneBallRef}
        position={[-1.01, 15, 0]}
        textureURL={one}
      />
      <PoolBall setRef={twoBallRef} position={[1.01, 17, 0]} textureURL={two} />
      <PoolBall
        setRef={threeBallRef}
        position={[-0.51, 16, 0]}
        textureURL={three}
      />
      <PoolBall
        setRef={fourBallRef}
        position={[-1.01, 17, 0]}
        textureURL={four}
      />
      <PoolBall
        setRef={fiveBallRef}
        position={[-2.02, 17, 0]}
        textureURL={five}
      />
      <PoolBall setRef={sixBallRef} position={[1.53, 16, 0]} textureURL={six} />
      <PoolBall
        setRef={sevenBallRef}
        position={[0.51, 14, 0]}
        textureURL={seven}
      />
      <PoolBall
        setRef={eightBallRef}
        position={[0, 15, 0]}
        textureURL={eight}
      />
      <PoolBall setRef={nineBallRef} position={[0, 13, 0]} textureURL={nine} />
      <PoolBall setRef={tenBallRef} position={[0.51, 16, 0]} textureURL={ten} />
      <PoolBall
        setRef={elevenBallRef}
        position={[2.02, 17, 0]}
        textureURL={eleven}
      />
      <PoolBall
        setRef={twelveBallRef}
        position={[-0.51, 14, 0]}
        textureURL={twelve}
      />
      <PoolBall
        setRef={thirteenBallRef}
        position={[0, 17, 0]}
        textureURL={thirteen}
      />
      <PoolBall
        setRef={fourteenBallRef}
        position={[-1.53, 16, 0]}
        textureURL={fourteen}
      />
      <PoolBall
        setRef={fifteenBallRef}
        position={[1.01, 15, 0]}
        textureURL={fifteen}
      />
      <Cue
        setRef={cueRef}
        position={
          zeroBallRef.current && [
            zeroBallRef.current.position.x,
            zeroBallRef.current.position.y,
            zeroBallRef.current.position.z
          ]
        }
      />
    </>
  );
}

export default Scene;