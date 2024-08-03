import React from "react";
import ChildSample from "./ChildSample";

const Sample = () => {
  
  return (
    <div>
    
      <ChildSample color="red" text={23} font="sm"/>
      <ChildSample color="blue" text="gbg" font="lg"/>
      <ChildSample color="green" text={45} font="xl"/>
      

    </div>
  )
}
export default Sample