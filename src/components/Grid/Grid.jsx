import { useMemo, useState } from "react";
import Card from "../Card/Card";
import TurnRender from "../Turn/TurnRender";
import style from "./grid.module.css";

function Grid({ numberOfCard }) {
    const [turn , setTurn] = useState(false); 
   
  function play() {
       setTurn(!turn); 
  }

  return (
    <>
    <TurnRender turn = {turn} />
      <div className={style.gridWrapper}>
        <div className={style.grid}>
          {Array(numberOfCard)
            .fill(<Card />)
            .map((ele, idx) => {
              return <Card key={idx} onPlay={play} />;
            })}
        </div>
      </div>
    </>
  );
}

export default Grid;
