import { Link } from "react-router-dom";
import briefcase from "~/assets/images/briefcase.svg";
import user from "~/assets/images/user.svg";
import { Button } from "~/components/components";
import { BtnChild, BtnCls, BtnTest, Route } from "~/enums/enums";
import { useAppDispatch, useAppSelector } from "~/hooks/hooks";
import { signout } from "~/store/actions/actions";
import "./styles/profile.css";

const Profile = () => {
  const userName = useAppSelector((state) => state.auth.user?.fullName);
  const dispatch = useAppDispatch();

  const signOut = () => {
    dispatch(signout());
  };

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
                  {userName}
                </li>
                <li className="profile-nav__item">
                  <Button
                    cls={BtnCls.SIGNOUT}
                    testId={BtnTest.SIGNOUT}
                    children={BtnChild.SIGNOUT}
                    onClick={signOut}
                  />
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
