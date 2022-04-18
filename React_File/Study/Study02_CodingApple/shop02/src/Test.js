import React, {useContext} from "react";
import { 재고context } from "./App";

function Test(){

  let 재고 = useContext(재고context)

  return(
    <p>재고: {재고[0]}</p>
  )

}

export default Test;