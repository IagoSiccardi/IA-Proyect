import Description from "./components/Description";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Timer from "./components/Timer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/> 
      <Description/>
      <Timer duration={2 * 24 * 60 * 60 * 1000} />
    </div>
  );
}

export default App;
