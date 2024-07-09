import "./styles/profile.css";
import briefcase from "~/assets/images/briefcase.svg";
import user from "~/assets/images/user.svg";
import { Link } from "react-router-dom";
import { Route } from "~/enums/enums";

const Profile = () => {
  return (
    <>
      <nav data-test-id="header-nav" className="header__nav">
        <ul className="nav-header__list">
          <li className="nav-header__item" title="Bookings">
            <Link
              to={Route.BOOKINGS}
              data-test-id="header-bookings-link"
              className="nav-header__inner"
            >
              <span className="visually-hidden">Bookings</span>
              <img src={briefcase} alt="bookings" />
            </Link>
          </li>
          <li className="nav-header__item" title="Profile">
            <div data-test-id="header-profile-nav" className="nav-header__inner profile-nav">
              <span className="visually-hidden">Profile</span>
              <img src={user} alt="profile" />
              <ul data-test-id="header-profile-nav-list" className="profile-nav__list">
                <li data-test-id="header-profile-nav-username" className="profile-nav__item">
                  John Doe
                </li>
                <li className="profile-nav__item">
                  <Link
                    to={Route.SIGNIN}
                    data-test-id="header-profile-nav-sign-out"
                    className="profile-nav__sign-out button"
                  >
                    Sign Out
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export { Profile };
