import React from "react";
import Icon from "../Icons/Icon";
import style from "./card.module.css";

function Card({ onPlay, player, index, gameEnd}) {
   let icon  = <Icon />;

  if (player === "X") {
    icon = <Icon name="cross" />;
  } else if (player === "O") {
    icon = <Icon name="circle" />;
  }

  return (
    <div className={style.card} onClick={() => !gameEnd && player === "" && onPlay(index)}>
      {icon }
    </div>
  );
}

export default Card;
