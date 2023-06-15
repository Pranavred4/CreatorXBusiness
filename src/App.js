import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
 
import './App.css';
import Sidenav from './Components/Sidenav';
import Explore from "./Pages/Explore";
import Home from "./Pages/Home";
import Business from "./Pages/Business";
import Creators from "./Pages/Creators";


 
function App() {
  return (
    <div className="App">
      <Sidenav/>
      <main style={{width: "100%"}}>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/explore" element={<Explore />} />
          <Route path="/business" element={<Business />}/>
          <Route path="/creators" element={<Creators />} />
        </Routes>
      </main>
    </div>
  );
}
export default App;