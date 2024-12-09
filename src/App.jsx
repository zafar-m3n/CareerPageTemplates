import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Template1 from "@/pages/Template1";
import Template2 from "@/pages/Template2";
import Template3 from "@/pages/Template3";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/template1" />} />
        <Route path="/template1" element={<Template1 />} />
        <Route path="/template2" element={<Template2 />} />
        <Route path="/template3" element={<Template3 />} />
      </Routes>
    </Router>
  );
}

export default App;
