import React, { /*useState,*/ useContext } from "react";
import CharContext from "../../utils/CharContext"
import Sprite from "../sprite";


export default function Actor({/*sprite,*/ data, step = 0, dir =0}) {
    const { h, w } = data;
    const {characterState} = useContext(CharContext)
    return (
        <Sprite
        image={characterState.spriteImage}
        data ={{
            x: step * w,
            y: dir * h,
            h,
            w,
        }}/>
    )
}