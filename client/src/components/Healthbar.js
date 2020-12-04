import React, { useContext, useEffect } from "react";
import CharContext from "../utils/CharContext"


const Healthbar = () => {
  const {characterState} = useContext(CharContext)

  // const {maxHealth, currentHealth} = useContext(CharContext)
  // let current  = currentHealth;
  // let max = maxHealth;

  const fullWidth = 110;
  const percent = characterState.currentHealth / characterState.maxHealth;
  const pixelFill = Math.floor(fullWidth * percent);
  let healthbar;
  const greenSVG = <svg xmlns="http://www.w3.org/2000/svg" width={160} viewBox="0 -0.5 160 160" shapeRendering="crispEdges">
    {/* <metadata> "Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj" </metadata> */}
    <path stroke="#ffffff" d="M20 40h120M20 41h120M20 42h120M20 43h120M20 44h120M15 45h10M135 45h10M15 46h10M135 46h10M15 47h10M135 47h10M15 48h10M135 48h10M15 49h10M135 49h10M15 50h5M140 50h5M15 51h5M140 51h5M15 52h5M140 52h5M15 53h5M140 53h5M15 54h5M140 54h5M15 55h5M140 55h5M15 56h5M140 56h5M15 57h5M140 57h5M15 58h5M140 58h5M15 59h5M140 59h5M15 60h5M140 60h5M15 61h5M140 61h5M15 62h5M140 62h5M15 63h5M140 63h5M15 64h5M140 64h5M15 65h10M135 65h10M15 66h10M135 66h10M15 67h10M135 67h10M15 68h10M135 68h10M15 69h10M135 69h10M20 70h120M20 71h120M20 72h120M20 73h120M20 74h120" />
    <path stroke="#000000" d="M25 45h110M25 46h110M25 47h110M25 48h110M25 49h110M20 50h5M135 50h5M20 51h5M135 51h5M20 52h5M135 52h5M20 53h5M135 53h5M20 54h5M135 54h5M20 55h5M135 55h5M20 56h5M135 56h5M20 57h5M135 57h5M20 58h5M135 58h5M20 59h5M135 59h5M20 60h5M135 60h5M20 61h5M135 61h5M20 62h5M135 62h5M20 63h5M135 63h5M20 64h5M135 64h5M25 65h110M25 66h110M25 67h110M25 68h110M25 69h110" />
    <path stroke="#313131" d="M25 50h110M25 51h110M25 52h110M25 53h110M25 54h110" />
    <path stroke="#585858" d="M25 55h110M25 56h110M25 57h110M25 58h110M25 59h110M25 60h110M25 61h110M25 62h110M25 63h110M25 64h110" />
    <rect fill="#189f08" x={25} y={49.5} width={pixelFill} height={15} />
    <rect fill="#28733c" x={25} y={49.5} width={pixelFill} height={5} />
  </svg>
  const redSVG = <svg xmlns="http://www.w3.org/2000/svg" width={160} viewBox="0 -0.5 160 160" shapeRendering="crispEdges">
    {/* <metadata> "Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj" </metadata> */}
    <path stroke="#ffffff" d="M20 40h120M20 41h120M20 42h120M20 43h120M20 44h120M15 45h10M135 45h10M15 46h10M135 46h10M15 47h10M135 47h10M15 48h10M135 48h10M15 49h10M135 49h10M15 50h5M140 50h5M15 51h5M140 51h5M15 52h5M140 52h5M15 53h5M140 53h5M15 54h5M140 54h5M15 55h5M140 55h5M15 56h5M140 56h5M15 57h5M140 57h5M15 58h5M140 58h5M15 59h5M140 59h5M15 60h5M140 60h5M15 61h5M140 61h5M15 62h5M140 62h5M15 63h5M140 63h5M15 64h5M140 64h5M15 65h10M135 65h10M15 66h10M135 66h10M15 67h10M135 67h10M15 68h10M135 68h10M15 69h10M135 69h10M20 70h120M20 71h120M20 72h120M20 73h120M20 74h120" />
    <path stroke="#000000" d="M25 45h110M25 46h110M25 47h110M25 48h110M25 49h110M20 50h5M135 50h5M20 51h5M135 51h5M20 52h5M135 52h5M20 53h5M135 53h5M20 54h5M135 54h5M20 55h5M135 55h5M20 56h5M135 56h5M20 57h5M135 57h5M20 58h5M135 58h5M20 59h5M135 59h5M20 60h5M135 60h5M20 61h5M135 61h5M20 62h5M135 62h5M20 63h5M135 63h5M20 64h5M135 64h5M25 65h110M25 66h110M25 67h110M25 68h110M25 69h110" />
    <path stroke="#313131" d="M25 50h110M25 51h110M25 52h110M25 53h110M25 54h110" />
    <path stroke="#585858" d="M25 55h110M25 56h110M25 57h110M25 58h110M25 59h110M25 60h110M25 61h110M25 62h110M25 63h110M25 64h110" />
    <rect fill="#f54842" x={25} y={49.5} width={pixelFill} height={15} />
    <rect fill="#962f2c" x={25} y={49.5} width={pixelFill} height={5} />
  </svg>
  healthbar = greenSVG;
  // if (percent > 30) {
  //   healthbar = greenSVG;
  // }
  if (percent < 30) {
    healthbar = redSVG;
  }
  return (
    <div>
      {healthbar}
      {/* <button onClick={() => setHealth(health - 10)}>Ouch</button> */}
    </div>
  )
}
export default Healthbar;