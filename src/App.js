import { Routes, Route } from "react-router-dom";
import Login from "./login/Login";
import Dashboard from "./dashboard/Dashboard";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Login />}
      />
      <Route
        path="/tableau"
        element={<Dashboard />}
      />
    </Routes>
  );
}

export default App;
