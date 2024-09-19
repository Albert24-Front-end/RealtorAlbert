import { Link } from "react-router-dom";
import Paragraph from "../typography/Paragraph/Paragraph";
import { SignInButton } from "@clerk/clerk-react";

interface RegistrationInfoProps {
   
    authWithText: string;
    
  }

const RegistrationInfo =({
    
    
    authWithText,
    
  }: RegistrationInfoProps)=> {
    return (
        <div className="registration">
     
      <Paragraph>{authWithText}</Paragraph>
      <div className="icons-wrapper">
        <SignInButton forceRedirectUrl={"/main"}
          children={
            <Link className="reg__link google-link" to="/">
              <img src="/public/google.svg" alt="Google" />
            </Link>
          }
        />
      </div>
    </div>
    );
};
export default RegistrationInfo;