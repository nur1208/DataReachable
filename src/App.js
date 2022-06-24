import Test from "./components/Test";
import { Landing } from "./pages/Landing";
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/about" element={<div>about</div>} />
        <Route path="/users" element={<div>users</div>} />
        <Route path="/" element={<div>Home</div>} />
      </Routes>
    </div>
  );
}

export default App;
