import { createBrowserRouter } from 'react-router-dom';
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";
// import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
// import { FavouritesPage } from "./pages/FavouritesPage/FavouritesPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/main",
    element: <MainPage />,
  },
  // {
  //   path: "/profile",
  //   element: <ProfilePage />,
  // },
  // {
  //   path: "/favourites",
  //   element: <FavouritesPage />,
  // },

]);
