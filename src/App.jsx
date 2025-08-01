import "./App.css"; 
import Grid from "./components/Grid/Grid";
import Heading from "./components/Heading/Heading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

function App() {


  return (
    <>
    <Heading/>
    <Grid numberOfCard={9} />
    <ToastContainer position="top-center" />
    </>
  )
}

export default App
