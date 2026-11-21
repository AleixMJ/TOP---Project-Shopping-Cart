import {Outlet} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx"
import './App.css'

export default function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
