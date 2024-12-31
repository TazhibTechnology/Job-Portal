import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ApplyJob from "./pages/ApplyJob";
import Applications from "./pages/Applications";
const App = () => {
  return (
    <div>
      <Routes>
        {/* Home page */}
        <Route path='/' element={<Home />} />
        {/* Apply Job by id */}
        <Route path='/apply-job/:id' element={<ApplyJob />} />
        {/* Application Page */}
        <Route path='/applications' element={<Applications />} />
      </Routes>
    </div>
  );
};

export default App;
