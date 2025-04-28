import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import Noticias from "./components/noticias";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={< LoginForm/>} />
        <Route path="/register" element={< RegisterForm/>} />
        <Route path="/noticias" element={< Noticias/>} />
      </Routes>
    </Router>
  );
}

export default App;
