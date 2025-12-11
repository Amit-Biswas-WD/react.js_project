import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../loyout/template/main/MainLayout";
import HomeView from "../page/public/home/HomeView";
import Servizi from './../page/public/Servizi/Servizi';

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomeView /> },
      { path: "/home", element: <HomeView /> },
      { path: "/servizi", element: <Servizi /> },
    ],
  },
]);

export { AppRouter };
