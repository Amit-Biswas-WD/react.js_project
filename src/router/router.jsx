import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../loyout/template/main/MainLayout";
import HomeView from "../page/public/about/HomeView";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{ index: true, element: <HomeView /> }],
  },
]);

export { AppRouter };
