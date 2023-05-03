import { Outlet } from "react-router-dom";
import { Header } from "src/modules";

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
