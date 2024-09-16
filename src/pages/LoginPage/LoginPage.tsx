import { SCLoginPage } from "./LoginPage.styled";
import Heading from "../../components/typography/Heading/Heading";
import LoginForm from "../../components/LoginForm";
import RegistrationInfo from "../../components/RegistrationInfo/RegistrationInfo";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <SCLoginPage>
      <Heading variant={"h1"} text={"Authorization"}/>
      <LoginForm/>
      <Link to="/">Forgot your password?</Link>
      <RegistrationInfo
      authWithText={"Log in with"}
      />
    </SCLoginPage>
    
  );
};
