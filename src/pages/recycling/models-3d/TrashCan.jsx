import { useGLTF, useTexture } from "@react-three/drei";
import { useMemo } from "react";
import { RepeatWrapping } from "three";

const TrashCan = (props) => {
  const { nodes, materials } = useGLTF("models-3d/trash-can.glb");
  //   console.log(trashCanModel);
  const PATH = useMemo(() => "materials/floor/patterned_brick_floor_", []);

  const floorTexture = useTexture({
    map: PATH + "diff_1k.jpg",
    //displacementMap: PATH + "disp_1k.png",
    nomalMap: PATH + "nor_gl_1k.jpg",
    roughnessMap: PATH + "rough_1k.jpg",
    ambientOcclusionMap: PATH + "ao_1k.jpg"
  });

  Object.keys(floorTexture).map((key)=>{
    floorTexture[key].wrapS = floorTexture[key].wrapT = RepeatWrapping
    // esta linea indica que se repite el piso 
  floorTexture[key].repeat.set(2,2)
  })


//   floorTexture.map.wrapS = floorTexture.map.wrapT = RepeatWrapping
//   floorTexture.map.repeat.set(2,2)

//   floorTexture.nomalMap.wrapS = floorTexture.nomalMap.wrapT = RepeatWrapping
//   floorTexture.nomalMap.repeat.set(2,2)

//   floorTexture.roughnessMap.wrapS = floorTexture.roughnessMap.wrapT = RepeatWrapping
//   floorTexture.roughnessMap.repeat.set(2,2)

//   floorTexture.ambientOcclusionMap.wrapS = floorTexture.ambientOcclusionMap.wrapT = RepeatWrapping
//   floorTexture.ambientOcclusionMap.repeat.set(2,2)
 
  console.log(floorTexture);
  return (
    // <mesh>
    //     <primitive object={trashCanModel.scene} />
    // </mesh>
    <group {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Tong_Sampah"
          geometry={nodes.Tong_Sampah.geometry}
          material={materials.Texture}
        />
        <mesh rotation-x={[Math.PI * 0.5]}>
            {/* tamaño del piso con box Geometry */}
          <boxGeometry args={[10, 10, 0.1]} />
          <meshStandardMaterial 
            // map={floorTexture.map}
            // normalMap={floorTexture.nomalMap}
            // roughnessMap={floorTexture.roughnessMap}
            // ambientOcclusionMap={floorTexture.ambientOcclusionMap}
            // displacementMap={floorTexture.displacementMap}
            {...floorTexture}
            />
        </mesh>
      </group>
    </group>
  );
};

export default TrashCan;

useGLTF.preload("models-3d/trash-can.glb");
