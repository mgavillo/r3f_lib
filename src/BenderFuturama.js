/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, PerspectiveCamera, useAnimations} from '@react-three/drei'
import { Canvas, useFrame, useThree, extend } from "@react-three/fiber";

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/BenderFuturama.gltf')
  const { actions } = useAnimations(animations, group)
  const {scene } = useThree();
  

  const onHover= ()=> {
    actions.wshAlors.play();
    actions.wshAlors.repetitions = 1;
    actions.wshAlors.reset();
  }

  console.log(scene)
  return (
    <group ref={group} {...props} dispose={null} castShadow receiveShadow onPointerEnter={onHover}>
      <group rotation={[0.92, 0.06, -0.08]}>
        <PerspectiveCamera makeDefault={false} far={1000} near={0.1} fov={22.9} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
      <group position={[0.36, 1.68, 2.41]} scale={0.11}>
        <mesh geometry={nodes.Circle021.geometry} material={nodes.Circle021.material} />
        <mesh geometry={nodes.Circle021_1.geometry} material={nodes.Circle021_1.material} />
        <group position={[0, 5.34, 0]} scale={0.44}>
          <mesh geometry={nodes.Circle026.geometry} material={nodes.Circle026.material} />
          <mesh geometry={nodes.Circle026_1.geometry} material={materials['Material.014']} />
        </group>
      </group>
      <group position={[0, 1.68, 2.62]} rotation={[Math.PI / 2, 0, 0]} scale={0.06}>
        <mesh geometry={nodes.Circle028.geometry} material={nodes.Circle028.material} />
        <mesh geometry={nodes.Circle028_1.geometry} material={nodes.Circle028_1.material} />
        <mesh geometry={nodes.Circle028_2.geometry} material={nodes.Circle028_2.material} />
        <mesh geometry={nodes.Circle028_3.geometry} material={nodes.Circle028_3.material} />
        <mesh geometry={nodes.Circle028_4.geometry} material={nodes.Circle028_4.material} />
        <mesh geometry={nodes.Circle028_5.geometry} material={nodes.Circle028_5.material} />
      </group>
      <group position={[0, -5.25, 0]} scale={1.81}>
        <group position={[0, 1.6, 0.65]} rotation={[Math.PI / 2, 0, 0]} scale={0.33}>
          <group position={[0.79, -1.97, 0.78]} />
          <group position={[-0.79, -1.97, 0.78]} />
        </group>
      </group>
      <group position={[0, -0.79, 0]} scale={0.41}>
        <group position={[0, -0.06, 0]}>
          <group
            name="bras_droit"
            position={[-1.96, 4.14, 0]}
            rotation={[-0.24, -1.41, 1.4]}
            scale={[-0.63, -0.63, -0.63]}>
            <primitive object={nodes.right_shoulder} />
            <primitive object={nodes.right_arm} />
            <primitive object={nodes.right_elbow} />
            <group position={[0, 4.28, 0]} rotation={[Math.PI, 0, -Math.PI / 2]} scale={[-3.84, -3.84, -3.84]}>
              <mesh geometry={nodes.Circle013.geometry} material={nodes.Circle013.material} />
              <mesh geometry={nodes.Circle013_1.geometry} material={nodes.Circle013_1.material} />
              <mesh geometry={nodes.Circle013_2.geometry} material={nodes.Circle013_2.material} />
              <mesh geometry={nodes.Circle013_3.geometry} material={nodes.Circle013_3.material} />
            </group>
            <skinnedMesh
              geometry={nodes.Cylinder.geometry}
              material={nodes.Cylinder.material}
              skeleton={nodes.Cylinder.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Cylinder001.geometry}
              material={nodes.Cylinder001.material}
              skeleton={nodes.Cylinder001.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Cylinder005.geometry}
              material={nodes.Cylinder005.material}
              skeleton={nodes.Cylinder005.skeleton}
            />
          </group>
          <group position={[1.96, 4.14, 0]} rotation={[0, 0, -Math.PI / 2]} scale={0.63}>
            <primitive object={nodes.left_shoulder} />
            <primitive object={nodes.left_arm} />
            <primitive object={nodes.left_elbow} />
            <skinnedMesh
              geometry={nodes.Circle003_1.geometry}
              material={nodes.Circle003_1.material}
              skeleton={nodes.Circle003_1.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Circle003_2.geometry}
              material={nodes.Circle003_2.material}
              skeleton={nodes.Circle003_2.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Circle003_3.geometry}
              material={nodes.Circle003_3.material}
              skeleton={nodes.Circle003_3.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Circle003_4.geometry}
              material={nodes.Circle003_4.material}
              skeleton={nodes.Circle003_4.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Cylinder002.geometry}
              material={nodes.Cylinder002.material}
              skeleton={nodes.Cylinder002.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Cylinder003.geometry}
              material={nodes.Cylinder003.material}
              skeleton={nodes.Cylinder003.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Cylinder004.geometry}
              material={nodes.Cylinder004.material}
              skeleton={nodes.Cylinder004.skeleton}
            />
          </group>
          <group position={[-0.83, 0.27, 0]} rotation={[-Math.PI, 0, 0]} scale={5.16}>
            <primitive object={nodes.Bone} />
            <skinnedMesh
              geometry={nodes.Circle001_1.geometry}
              material={nodes.Circle001_1.material}
              skeleton={nodes.Circle001_1.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Circle001_2.geometry}
              material={nodes.Circle001_2.material}
              skeleton={nodes.Circle001_2.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Circle001_3.geometry}
              material={nodes.Circle001_3.material}
              skeleton={nodes.Circle001_3.skeleton}
            />
          </group>
          <group position={[0.83, 0.27, 0]} rotation={[-Math.PI, 0, 0]} scale={5.16}>
            <primitive object={nodes.Bone_1} />
            <skinnedMesh
              geometry={nodes.Circle009_1.geometry}
              material={nodes.Circle009_1.material}
              skeleton={nodes.Circle009_1.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Circle009_2.geometry}
              material={nodes.Circle009_2.material}
              skeleton={nodes.Circle009_2.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Circle009_3.geometry}
              material={nodes.Circle009_3.material}
              skeleton={nodes.Circle009_3.skeleton}
            />
          </group>
          <group position={[-1.15, 2.3, 1.15]} rotation={[0.05, 0, 0.04]} scale={[0.77, 0.77, 0.77]}>
            <group rotation={[Math.PI, 1.16, -Math.PI]}>
              <mesh
                geometry={nodes.Circle004.geometry}
                material={nodes.Circle004.material}
                position={[-0.82, -0.16, 1.27]}
                rotation={[-3.01, -1.17, -3.06]}
                scale={[3.14, 3.14, 3.14]}
              />
            </group>
          </group>
          <group position={[0, 5.04, 0]} scale={1.2}>
            <group position={[-0.33, 1.63, 0.89]} />
            <group position={[0.33, 1.63, 0.89]} />
            <group position={[0, 0.28, 0.26]} scale={0.33}>
              <group position={[0, 1.22, -0.8]}>
                <group position={[0, -1.3, 0.8]}>
                  <group position={[0, 1, 0]} scale={[0.62, 0.62, 0.62]} />
                  <group position={[0, 0.62, 0]} scale={[6.18, 6.18, 6.18]}>
                    <mesh geometry={nodes.Circle006.geometry} material={nodes.Circle006.material} />
                    <mesh geometry={nodes.Circle006_1.geometry} material={nodes.Circle006_1.material} />
                    <mesh geometry={nodes.Circle006_2.geometry} material={nodes.Circle006_2.material} />
                    <mesh geometry={nodes.Circle006_3.geometry} material={nodes.Circle006_3.material} />
                    <mesh geometry={nodes.Circle006_4.geometry} material={nodes.Circle006_4.material} />
                    <mesh geometry={nodes.Circle006_5.geometry} material={nodes.Circle006_5.material} />
                    <mesh geometry={nodes.Circle006_6.geometry} material={nodes.Circle006_6.material} />
                    <mesh geometry={nodes.Circle006_7.geometry} material={nodes.Circle006_7.material} />
                  </group>
                </group>
                <group position={[0, 0.29, 0.8]}>
                  <group position={[0, -0.01, 0]} rotation={[0, 0, Math.PI]} scale={0.62} />
                  <group position={[0, 0.41, 0]} rotation={[0, 0, Math.PI]} scale={6.18}>
                    <mesh geometry={nodes.Circle017.geometry} material={nodes.Circle017.material} />
                    <mesh geometry={nodes.Circle017_1.geometry} material={nodes.Circle017_1.material} />
                    <mesh geometry={nodes.Circle017_2.geometry} material={nodes.Circle017_2.material} />
                    <mesh geometry={nodes.Circle017_3.geometry} material={nodes.Circle017_3.material} />
                    <mesh geometry={nodes.Circle017_4.geometry} material={nodes.Circle017_4.material} />
                    <mesh geometry={nodes.Circle017_5.geometry} material={nodes.Circle017_5.material} />
                    <mesh geometry={nodes.Circle017_6.geometry} material={nodes.Circle017_6.material} />
                    <mesh geometry={nodes.Circle017_7.geometry} material={nodes.Circle017_7.material} />
                  </group>
                </group>
              </group>
            </group>
            <group position={[0, 1.76, 0.72]} scale={0.26}>
              <group position={[-1.25, -0.51, 0.66]} rotation={[-0.96, 0, 0]}>
                <mesh
                  geometry={nodes.Sphere006.geometry}
                  material={nodes.Sphere006.material}
                  rotation={[0.96, 0, 0]}
                  scale={[7.72, 7.72, 7.72]}
                />
              </group>
              <group position={[-1.25, -0.51, 0.66]} rotation={[-2.09, -1.57, 0]}>
                <mesh
                  geometry={nodes.Sphere002.geometry}
                  material={nodes.Sphere002.material}
                  rotation={[Math.PI / 2, -Math.PI / 6, -Math.PI / 2]}
                  scale={[7.72, 7.72, 7.72]}
                />
              </group>
              <group position={[1.25, -0.51, 0.66]} rotation={[2.18, 0, 0]}>
                <mesh
                  geometry={nodes.Sphere001.geometry}
                  material={nodes.Sphere001.material}
                  rotation={[-2.18, 0, 0]}
                  scale={[7.72, 7.72, 7.72]}
                />
              </group>
              <group position={[1.25, -0.51, 0.66]} rotation={[Math.PI / 3, -Math.PI / 2, 0]}>
                <mesh
                  geometry={nodes.Sphere007.geometry}
                  material={nodes.Sphere007.material}
                  rotation={[-Math.PI / 2, Math.PI / 6, Math.PI / 2]}
                  scale={[7.72, 7.72, 7.72]}
                />
              </group>
            </group>
            <group position={[0, 1.76, 0.9]} rotation={[Math.PI / 2, 0, 0]} scale={0.36}>
              <group position={[-0.91, -0.02, 0.38]} rotation={[-0.09, 0, 0]}>
                <group position={[0, 0, -0.01]} rotation={[-1.48, 0, 0]} scale={[5.59, 5.59, 5.59]}>
                  <mesh
                    name="Sphere004_1"
                    activeBloom={true}
                    geometry={nodes.Sphere004_1.geometry}
                    material={nodes.Sphere004_1.material}
                    morphTargetDictionary={nodes.Sphere004_1.morphTargetDictionary}
                    morphTargetInfluences={nodes.Sphere004_1.morphTargetInfluences}
                  />
                  <mesh
                    name="Sphere004_2"
                    geometry={nodes.Sphere004_2.geometry}
                    material={nodes.Sphere004_2.material}
                    morphTargetDictionary={nodes.Sphere004_2.morphTargetDictionary}
                    morphTargetInfluences={nodes.Sphere004_2.morphTargetInfluences}
                  />
                </group>
              </group>
              <group position={[0, 4.82, 0]} rotation={[-Math.PI / 2, 0, 0]} />
              <group position={[0.91, -0.02, 0.38]} rotation={[-0.09, 0, 0]}>
                <group position={[0, 0, -0.01]} rotation={[-1.48, 0, 0]} scale={[5.59, 5.59, 5.59]}>
                  <mesh
                    name="Sphere008_1"
                    activeBloom={true}
                    geometry={nodes.Sphere008_1.geometry}
                    material={nodes.Sphere008_1.material}
                    morphTargetDictionary={nodes.Sphere008_1.morphTargetDictionary}
                    morphTargetInfluences={nodes.Sphere008_1.morphTargetInfluences}
                  />
                  <mesh
                    name="Sphere008_2"
                    // activeBloom={true}
                    geometry={nodes.Sphere008_2.geometry}
                    material={nodes.Sphere008_2.material}
                    morphTargetDictionary={nodes.Sphere008_2.morphTargetDictionary}
                    morphTargetInfluences={nodes.Sphere008_2.morphTargetInfluences}
                  />
                </group>
              </group>
            </group>
            <group position={[0, 1.23, 0]} scale={2.01}>
              <mesh geometry={nodes.Circle_1.geometry} material={nodes.Circle_1.material} />
              <mesh geometry={nodes.Circle_2.geometry} material={nodes.Circle_2.material} />
              <group position={[0, 0.2, 0.36]}>
                <mesh geometry={nodes.Circle008_1.geometry} material={nodes.Circle008_1.material} />
                <mesh geometry={nodes.Circle008_2.geometry} material={nodes.Circle008_2.material} />
              </group>
              <group position={[0, 0.99, 0]}>
                <mesh geometry={nodes.Sphere003_1.geometry} material={nodes.Sphere003_1.material} />
                <mesh geometry={nodes.Sphere003_2.geometry} material={nodes.Sphere003_2.material} />
              </group>
              <mesh
                name="mask_1"
                geometry={nodes.mask_1.geometry}
                material={nodes.mask_1.material}
                morphTargetDictionary={nodes.mask_1.morphTargetDictionary}
                morphTargetInfluences={nodes.mask_1.morphTargetInfluences}
                position={[0, 0.2, 0.61]}
              />
            </group>
          </group>
          <group position={[0, 2.61, 0]} scale={2.41}>
            <mesh geometry={nodes.Circle010_1.geometry} material={nodes.Circle010_1.material} />
            <mesh geometry={nodes.Circle010_2.geometry} material={nodes.Circle010_2.material} />
          </group>
        </group>
      </group>
      <group position={[0.36, 1.68, 2.41]} scale={0.11}>
        <mesh geometry={nodes.Circle021.geometry} material={nodes.Circle021.material} />
        <mesh geometry={nodes.Circle021_1.geometry} material={nodes.Circle021_1.material} />
      </group>
      <group position={[0, 1.68, 2.62]} rotation={[Math.PI / 2, 0, 0]} scale={0.06}>
        <mesh geometry={nodes.Circle028.geometry} material={nodes.Circle028.material} />
        <mesh geometry={nodes.Circle028_1.geometry} material={nodes.Circle028_1.material} />
        <mesh geometry={nodes.Circle028_2.geometry} material={nodes.Circle028_2.material} />
        <mesh geometry={nodes.Circle028_3.geometry} material={nodes.Circle028_3.material} />
        <mesh geometry={nodes.Circle028_4.geometry} material={nodes.Circle028_4.material} />
        <mesh geometry={nodes.Circle028_5.geometry} material={nodes.Circle028_5.material} />
      </group>
    </group>
  )
}

useGLTF.preload('/BenderFuturama.gltf')
