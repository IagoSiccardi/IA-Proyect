import { useState } from "react";
import Description from "./components/Description";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Timer from "./components/Timer";

function App() {

  const [modal, setModal] = useState(true)

  return (
    <div className="App">
      {modal && <Timer/>}
      <Navbar/>
      <Main/> 
      <Description/>


    </div>
  );
}

export default App;
