import React from 'react'
import Icon from '../Icons/Icon'
import style from "./card.module.css"; 

function Card({iconName}) {
  return (
    <div className={style.card}>
        <Icon name={iconName} />
    </div>
  )
}

export default Card