import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

export const DefaultLayout = () => {
  return (
    <div>
      <Header colorHeader="dark" />
      <Outlet />
      <Footer />
    </div>
  );
};
