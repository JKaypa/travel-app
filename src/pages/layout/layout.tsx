import { Outlet } from "react-router-dom";
import { Footer, Header } from "~/components/components";
import "./styles/layout.css";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export { Layout };
