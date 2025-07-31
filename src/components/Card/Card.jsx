import React from 'react'
import Icon from '../Icons/Icon'
import style from "./card.module.css"; 

function Card({iconName, onPlay}) {

    function playMove() {
        onPlay()
    }
    
  return (
    <div className={style.card} onClick={onPlay}>
        <Icon name={iconName} />
    </div>
  )
}

export default Card