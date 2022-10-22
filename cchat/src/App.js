import './App.css';
import { Routes, Route} from "react-router-dom";
import Join from "./component/Join/Join";
import Chat from "./component/Chat/Chat";


function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Join/>}/>
        <Route exact path="/chat" element={<Chat/>}/>
      </Routes>
    </div>
  );
}

export default App;
