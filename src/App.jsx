import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./router/router";

function App() {
  return (
    <>
      <RouterProvider router={AppRouter} />
    </>
  );
}

export default App;
