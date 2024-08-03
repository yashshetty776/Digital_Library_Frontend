import Home from "./components/Home";
import './css/App.css';
import Admindash from "./components/Admindash";
import Studentdash from "./components/Studentdash";
function App() {
  const kutty=false;
  const admin=true;
  return (
    <>
      <Home />
      <Admindash/>
  
    </>
  );
}

export default App;

