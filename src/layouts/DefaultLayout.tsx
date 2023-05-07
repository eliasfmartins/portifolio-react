import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer";
import { LayoutContainer } from "./styled";
export const DefaultLayout = () => {
  return (
    <LayoutContainer>
      <Header colorHeader="light" isActive={false} />
      <Outlet />
      <Footer />
    </LayoutContainer>
  );
};
