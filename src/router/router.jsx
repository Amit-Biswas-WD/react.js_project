import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../loyout/template/main/MainLayout";
import HomeView from "../page/public/home/HomeView";
import Servizi from "../page/public/Servizi/servizi";
import FormazioneView from "../page/public/formazione/FormazioneView";
import ChisiamoView from "../page/public/chisiamo/ChisiamoView";
import CollaboraView from "../page/public/collabora/CollaboraView";
import ContattaciView from "../page/public/contattaci/ContattaciView";
import PaymentDetails from "../page/public/payment/PaymentDetails";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomeView /> },
      { path: "/home", element: <HomeView /> },
      { path: "/servizi", element: <Servizi /> },
      { path: "/formazione", element: <FormazioneView /> },
      { path: "/chisiamo", element: <ChisiamoView/> },
      { path: "/collabora", element: <CollaboraView/> },
      { path: "/contattaci", element: <ContattaciView/> },
      { path: "/paymentDetails", element: <PaymentDetails/> },
    ],
  },
]);

export { AppRouter };
