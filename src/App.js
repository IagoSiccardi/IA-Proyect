import { useState } from "react";
import Description from "./components/Description";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Timer from "./components/Timer";

function App() {

  const [modal, setModal] = useState(true)

  const handleModal = () => {
    setModal(!modal)
  }

  return (
    <div className="App">
      {modal && <Timer handleModal={handleModal}/>}
      <Navbar/>
      <Main handleModal={handleModal} modal={modal}/> 
      <Description/>


    </div>
  );
}

export default App;
