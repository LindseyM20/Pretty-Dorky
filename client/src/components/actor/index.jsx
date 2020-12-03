import React from "react";
import Sprite from "../sprite";


export default function Actor({sprite, data, step = 0, dir =0}) {
    const { h, w } = data;
    return (
        <Sprite
        image={"url(https://i.ibb.co/yg3Vrjg/ge-spritesheet.png)"}
        data ={{
            x: step * w,
            y: dir * h,
            h,
            w,
        }}/>
    )
}