import Test from "./components/Test";
import { Landing } from "./pages/Landing";
import { Routes, Route, Link } from "react-router-dom";
import InputArray from "./components/InputArray";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/about" element={<div>about</div>} />
        <Route path="/users" element={<div>users</div>} />
        <Route path="/test" element={<InputArray />} />
        <Route path="/" element={<div>Home</div>} />
      </Routes>
    </div>
  );
}

export default App;
