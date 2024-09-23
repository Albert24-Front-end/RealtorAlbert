
import { useEffect, useState } from "react";
import { Header } from "../../components";
import { SCProfilePage } from "./ProfilePage.styled";
import { useGetUserQuery } from "../../store/API/authAPI";
import { IGetUserResponse } from "../../store/API/types";
import { useNavigate } from "react-router-dom";

export const ProfilePage = () => {
  
  const [userData, setUserData] = useState<IGetUserResponse | null>(null);
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();

  const { data, error } = useGetUserQuery(userId as string); // запрос к API для получения данных пользователя
  console.log("userId из localStorage:", userId);
  console.log("Данные пользователя из API:", data);
  console.log("Текущее состояние userData:", userData);
  useEffect(() => {
    if (data) {
      setUserData(data.message); // устанавливаем данные пользователя, когда они приходят
    }
    if (error) {
      console.error("Ошибка при загрузке данных пользователя", error);
    }
  }, [data, error]);

  // Функция для выхода из аккаунта
  const handleLogout = () => {
    localStorage.removeItem("userId"); 
    alert("You have successfully logged out of your account.")
    navigate("/"); 
  };

  return (
    <SCProfilePage>
      <Header />
      <section className="profile-page">
        <img src="/public/real_estate_profile.webp" alt="real-estate_header" className="real-estate_header"/>
        <div className="profile-page_wrapper">
            <h1>Your profile data:</h1>
            {userData ? (
            <>
            <p>
              <strong>Your Email:</strong> {userData.mail}
            </p>
            <button onClick={handleLogout} className="logout-button">Log out</button>
            </>
          ) : (
            <p>Data loading...</p>
          )}
            {/* <p><strong>Password:</strong> {password}</p> */}
            </div>
      </section>
    </SCProfilePage>
    
  );
};
