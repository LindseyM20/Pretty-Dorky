import React, {useState} from "react";

export default function useWalk(maxSteps) {
    const [dir, setDir] = useState(0)
    const [step, setStep] = useState(0)
    // these refer to which row in the spritesheet the directions will use for the animation
    const directions = {
        down: 10,
        left: 9,
        right: 11, 
        up: 8,
    };

    function walk(dir) {
        setDir(directions[dir])
        // this is only cycling through for maxSteps passed in player
        setStep(prev => prev < maxSteps -1 ? prev +1 : 0)
    }

    return {
        walk, dir, step, directions,
    }
}