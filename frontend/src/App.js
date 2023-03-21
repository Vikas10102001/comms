import { React } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./component/auth/Login/Login";
import Dashboard from "./component/Dashboard/Dashboard";
import Register from "./component/auth/Register/Register";
import "./App.css";
import AlertNotification from "./component/shared/component/AlertNotification";

function App() {
  // useEffect(() => {
  //   window.process = {
  //     ...window.process,
  //     nextTick: () => {
  //       return null;
  //     },
  //   };
  // }, []);
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <AlertNotification />
    </>
  );
}

export default App;
