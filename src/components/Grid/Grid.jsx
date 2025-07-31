import Card from '../Card/Card'
import style from "./grid.module.css"

function Grid({numberOfCard}) {
  return <div className={style.gridWrapper}>

  <div className={style.grid}>
     {Array(numberOfCard).fill(<Card  />).map((ele, idx) => {
         return <Card key={idx} />
        })}
        </div>
   </div>
}

export default Grid