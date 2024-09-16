import { UserButton, useUser } from "@clerk/clerk-react";
import BlackButton from "../../BlackButton/BlackButton";
import { Link } from "react-router-dom";

const Header = () => {
  const { isSignedIn } = useUser();
  return (
    <header className="Header">
      <div className="Header__logo">
        <Link to="#">
          <img
            src="/public/logo-brand.svg"
            alt="logo-realtor"
            id="super__logo"
          />
        </Link>
      </div>
      <div className="Header__bar">
        <div className="Header__bar-dropdown">
          <Link to="#">main</Link>
        </div>
        <div className="Header__bar-dropdown">
          <Link to="#">profile</Link>
        </div>
        <div className="Header__bar-dropdown">
          <Link to="#">favourites</Link>
        </div>
        
      </div>
      {/* <div className="Header__services">
        <a href=""></a>
        <div className="Header__service">
          <a href="#">Manage rentals</a>
        </div>
        <a href=""></a>
        <div className="Header__service">
          <a href="#">Advertise</a>
        </div>
      </div> */}
      <div className="Header__buttons">
        {isSignedIn ? (
          ""
        ) : (
          <>
            <BlackButton text="Log in" />
          </>
        )}
      </div>
      {isSignedIn && <UserButton />}
    </header>
  );
};
export default Header;
