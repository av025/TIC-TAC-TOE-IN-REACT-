import { useMemo, useState } from "react";
import Card from "../Card/Card";
import TurnRender from "../Turn/TurnRender";
import style from "./grid.module.css";
import { isWining } from "../../utility/utility"; 
import { toast } from "react-toastify";



function Grid({ numberOfCard }) {
  const [turn, setTurn] = useState(false);
  const [board, setBoard] = useState(Array(numberOfCard).fill(""));
  const [winner, setWinner] = useState(null);

  function play(index) {
    if (turn === true) {
      board[index] = "O";
    } else {
      board[index] = "X";
    }

    const win = isWining(board, turn ? "O" : "X");

    if (win) {
      setWinner(win);
      toast.success(`Congratulations ${win} win the game`)
    }
    setBoard([...board]);
    setTurn(!turn);
  }

  function reset() {
    setBoard(Array(numberOfCard).fill(""));
    setWinner(null);
    setTurn(true);
  }

  return (
    <>
      <TurnRender turn={turn} />

      <div className={style.gridWrapper}>
        <div className={style.grid}>
          {board.map((value, idx) => {
            return <Card key={idx} onPlay={play} player={value} index={idx} gameEnd={winner ? true : false} />;
          })}
        </div>
      </div>
      {winner && (
        <div className={style.winnerWrapper}>
          <h3 className={style.heading}>Winner is {winner}</h3>
          <button className={style.button} onClick={reset}>Reset</button>
        </div>
      )}
    </>
  );
}

export default Grid;
