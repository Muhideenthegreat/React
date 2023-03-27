import {Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

function Model(props){
    const{ scene } = useGLTF("/statue.glb");
    return <primitive object = {scene} {...props} />
}

function Statue(){
    return(
        <Canvas dpr = {[1,2]} shadows camera = {{fov:45}} style = {{"position" : "absolute"}}>
            <color attach = "background" args = {["B2BEB5"]} />
            <PresentationControls speed = {1.5} global zoom = {.5} polar = {[-0.1, Math.PI /4]}>
                <Stage environment = {null}>
                    <Model scale = {0.01}/>
                </Stage>
            </PresentationControls>

        </Canvas>
    );
}

export default Statue;
