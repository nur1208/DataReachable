import Test from "./components/Test";
import { Landing } from "./pages/Landing";
import { Routes, Route, Link } from "react-router-dom";
import InputArray from "./components/InputArray";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
function App() {
  return (
    <DndProvider backend={Backend}>
      <Routes>
        <Route path="/about" element={<div>about</div>} />
        <Route path="/users" element={<div>users</div>} />
        <Route path="/test" element={<Test />} />
        <Route path="/" element={<div>Home</div>} />
      </Routes>
    </DndProvider>
  );
}

export default App;
