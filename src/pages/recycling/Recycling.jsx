import { Canvas } from "@react-three/fiber";
import Header from "../../components/Header/Header";
import "./Recycling.css";
import TrashCan from "./models-3d/TrashCan";
import { OrbitControls } from "@react-three/drei";

const RecyCling = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Canvas >
          <OrbitControls autoRotate={true} autoRotateSpeed={1}/>
          <ambientLight />
          <directionalLight position={[10,10,10]} intensity={5} />

          <TrashCan />
        </Canvas>
      </div>
    </>
  );
};

export default RecyCling;
