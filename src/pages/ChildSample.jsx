import React from "react";

const ChildSample = ({color,text,font}) => {
 
  return (
    <div className="">
      <button className={`bg-[${color} text-${font} ]`}>{text}</button>
    </div>
  )
}
export default ChildSample