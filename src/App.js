import { Routes, Route, Link } from "react-router-dom";
import InputArray from "./components/InputArray";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import TaskManagement from "./pages/TaskManagement/TaskManagement";
import { Landing } from "./pages/Landing/Landing";
import { Test } from "./components/Test";
function App() {
  return (
    <Routes>
      <Route path="/test" element={<Test type="spin" />} />

      <Route
        path="/task"
        element={
          <DndProvider backend={Backend}>
            <TaskManagement />
          </DndProvider>
        }
      />
      <Route path="/" element={<Landing />} />
    </Routes>
  );
}

export default App;
