import "./styles.css";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
