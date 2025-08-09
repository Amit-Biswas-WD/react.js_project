import { Outlet } from "react-router-dom";
import NavStyle from "./NavStyle";
import FooterStyle from "./FooterStyle";

const MainLayout = () => {
  return (
    <div>
      <nav>
        <NavStyle />
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        <FooterStyle />
      </footer>
    </div>
  );
};

export default MainLayout;
