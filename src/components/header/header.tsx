import { Link, useLocation } from "react-router-dom";

import { Route } from "~/enums/enums";
import { Profile } from "./components/profile/profile";
import { APP_NAME } from "~/constants/app-name";
import "./styles/header.css";

const Header = () => {
  const { pathname } = useLocation();
  const profile = pathname === Route.SIGNIN || pathname === Route.SIGNUP ? null : <Profile />;

  return (
    <header className="header">
      <div className="header__inner">
        <Link to={Route.ROOT} data-test-id="header-logo" className="header__logo">
          {APP_NAME}
        </Link>
        {profile}
      </div>
    </header>
  );
};

export { Header };
