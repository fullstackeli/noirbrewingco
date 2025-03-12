import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import { Link } from "react-router-dom"; 





function App() {
  return (
    <>
      <Navbar /> 
      <Outlet />
    </>
  );
}

export default App;
