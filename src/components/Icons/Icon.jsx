import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa";
import style from "./icon.module.css"

export default function Icon({ name }) {
  if (name === "circle") {
    return <FaRegCircle className={style.iconSize} />;
  } else if (name === "cross") {
    return <FaTimes className={style.iconSize} />;
  } else {
    return <FaPen className={style.iconSize} />;
  }
}
