import { useState } from "react";
import style from "./turnRender.module.css"

function TurnRender({turn}) {
    return <h2 className={style.turnHighlight}>Turn : {turn ? "O" : "X"} </h2>
}


export default TurnRender; 