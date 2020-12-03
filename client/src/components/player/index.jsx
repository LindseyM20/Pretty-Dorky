import React, {useState} from "react";
import Actor from "../actor";
import useKeyPress from "../hooks/use-key-press"
import useWalk from "../hooks/usewalk";


export default function Player() {
    const { dir, step, walk } = useWalk(9)
    const data = {
        h: 64,
        w: 64,
    };

    useKeyPress((e) => {
        const dir = e.key.replace("Arrow", "").toLowerCase()
        walk(dir)
        // if (directions.hasOwnProperty(dir)) console.dir(dir);
       
        e.preventDefault();
    })
    return (
    <Actor sprite={"url(https://i.ibb.co/yg3Vrjg/ge-spritesheet.png)"} data={data} step={step} dir={dir}/>
    );
} 