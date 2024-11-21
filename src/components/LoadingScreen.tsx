import React from "react";
import {motion as M} from "framer-motion";
import SpaceIoIcon from "../assets/SpaceIoIcon";

function LoadingScreen(){
    return(
        <div className="loading-screen w-screen h-screen overflow-hidden grid items-center justify-center bg-mainColor text-white">
            <M.div className="loading-screen-content" animate={{rotate: 360}} transition={{repeat: Infinity,duration:2,ease:"linear"}}>
                <SpaceIoIcon height={"60"} width={"60"}/>
            </M.div>
        </div>
    )
}

export default LoadingScreen