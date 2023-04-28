import { React } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./component/auth/Login/Login";
import Dashboard from "./component/Dashboard/Dashboard";
import Register from "./component/auth/Register/Register";
import "./App.css";
import AlertNotification from "./component/shared/component/AlertNotification";
import Spinner from "./component/shared/component/Spinner";
import { useSelector } from "react-redux";

function App() {
  // useEffect(() => {
  //   window.process = {
  //     ...window.process,
  //     nextTick: () => {
  //       return null;
  //     },
  //   };
  // }, []);
  const isLoading = useSelector((state) => {
    return state.spinner.isLoading;
  });
  console.log(isLoading);
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <AlertNotification />
      {isLoading && <Spinner />}
    </>
  );
}

export default App;
