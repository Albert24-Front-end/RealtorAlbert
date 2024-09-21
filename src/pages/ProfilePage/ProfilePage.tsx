
import { useEffect, useState } from "react";
import { Header } from "../../components";
import { SCProfilePage } from "./ProfilePage.styled";

export const ProfilePage = () => {
  
  const [email, setEmail] = useState<string | null>(null);
  // const [password, setPassword] = useState<string | null>(null);

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    // const storedPassword = localStorage.getItem("password");

    if (storedEmail) {
      setEmail(storedEmail);
    }
    // if (storedPassword) {
    //   setPassword(storedPassword);
    // }
  }, []);

  return (
    <SCProfilePage>
      <Header />
      <section className="profile-page">
        <img src="/public/real_estate_profile.webp" alt="real-estate_header" className="real-estate_header"/>
        <div className="profile-page_wrapper">
            <h1>Your profile data:</h1>
            <p><strong>Email:</strong> {email}</p>
            {/* <p><strong>Password:</strong> {password}</p> */}
            </div>
      </section>
    </SCProfilePage>
    
  );
};
