import Test from "./components/Test";
import { Landing } from "./pages/Landing";
import { Routes, Route, Link } from "react-router-dom";
import InputArray from "./components/InputArray";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import TaskManagement from "./pages/TaskManagement";
function App() {
  return (
    <DndProvider backend={Backend}>
      <Routes>
        <Route path="/test" element={<TaskManagement />} />
        <Route path="/task" element={<TaskManagement />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </DndProvider>
  );
}

export default App;
