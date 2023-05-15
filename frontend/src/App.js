import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
import EmployeeDashboard from "./components/EmployeeDashboard";

import Navigator from "./components/Navigator/Navigator";
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>
      <Navigator />
      <Routes>
        {/* Ads Routes */}
        <Route
          path="/employee/add-employee"
          element={<AddEmployee />}
        />
        <Route
          path="/employee/edit/:eid"
          element={<EditEmployee />}
        />
        <Route
          path="/"
          element={<EmployeeDashboard />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
