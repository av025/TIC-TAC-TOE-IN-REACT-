import "./App.css"; 
import Grid from "./components/Grid/Grid";
import Heading from "./components/Heading/Heading";

function App() {


  return (
    <>
    <Heading/>
    <Grid numberOfCard={9} />
    </>
  )
}

export default App
