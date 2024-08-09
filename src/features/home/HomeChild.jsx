import React, { memo } from "react"
const HomeChild = () => {
  console.log("render child")
  return (
    <div>HomeChildthis is</div>
  )
}
export default memo(HomeChild)