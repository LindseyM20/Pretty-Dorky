import React, { useState, useContext } from "react";
import Actor from "../actor";
import useKeyPress from "../hooks/use-key-press"
import useWalk from "../hooks/usewalk";
import CharContext from "../../utils/CharContext";

export default function Player() {

    const {characterState} = useContext(CharContext)
    // console.log(characterState)
    // we use 9, since the max "frames" in our sprite sheet has 9 images per cycle
    const { dir, step, walk } = useWalk(9)
    // this is the size of each "frame" in the sprtiesheet grid
    const data = {
        h: 128,
        w: 128,
    };

    useKeyPress((e) => {
        const dir = e.key.replace("Arrow", "").toLowerCase()
        walk(dir)
        // test below to check in console log that our arrow keys were tracking
        // if (directions.hasOwnProperty(dir)) console.dir(dir);
       
        e.preventDefault();
    })
    return (
    <Actor sprite={characterState.spriteImage} data={data} step={step} dir={dir}/>
    );
} 