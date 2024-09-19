import { createBrowserRouter } from 'react-router-dom';
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { ProfilePage } from './pages/ProfilePage/ProfilePage';
import { CardPage } from './pages/CardPage/CardPage';
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
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/card/:id",
    element: <CardPage />,
  },
  // {
  //   path: "/favourites",
  //   element: <FavouritesPage />,
  // },

]);
