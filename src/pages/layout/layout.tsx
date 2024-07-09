import { Outlet } from "react-router-dom";
import { Header } from "~/components/components";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export { Layout };
