import img from "../assets/Slider.png"
import { useState } from "react";
export default function Slider() {
  const [Current, setCurrent] = useState(0);
  const length = image.length
  const image = {
    img1:img,
    img2:img,
    img3:img,
  }  

  

  return (
  <>


    <div className="flex w-full h-[600px]">

      <div className="h-full bg-slate-700 hover:bg-slate-300 w-[10%]">prev</div>
      <div className="h-full "><img src={image[Current]} className="h-full w-full" alt="" /></div>
      <div className="h-full bg-slate-700 hover:bg-slate-300 w-[10%]">prev</div>
    </div>
    

  
  </>
  )
}
