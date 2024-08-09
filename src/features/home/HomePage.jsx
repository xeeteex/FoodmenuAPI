import React, { useMemo, useState } from "react";
import HomeChild from "./HomeChild";

const HomePage = () => {
  const [incre,setIncre]=useState(0)
  const [decre,setdDecre]=useState(100)
  
  const depentIncre = useMemo(()=>{
    for (let i = 0;i<100000000;i++){

    }
    console.log("function run")
    return 2*incre
  } ,[incre]);

  // console.log(depentIncre)


  return <div>
    <h1>Increment ko part</h1>
    <h1>{depentIncre}</h1>
    <button onClick={()=>setIncre((prev)=>prev+1)}>Increment butt</button>
    <p>.........................</p>

    <h1>Decrement ko part</h1>
    <h1>{decre}</h1>
    <button onClick={()=>setdDecre((prev)=>(prev-1))}>Decrement garne</button>
    </div>;
};
export default HomePage;
