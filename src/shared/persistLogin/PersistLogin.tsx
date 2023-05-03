import { useIsAuthenticated } from "react-auth-kit";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import { Paths } from "src/constants";

const PersistLogin = () => {
  const { pathname } = useLocation();

  const renderContent = () => {
    const isAuthenticated = useIsAuthenticated();

    if (isAuthenticated()) {
      if (pathname === Paths.login) {
        return <Navigate to={Paths.home} />;
      } else {
        return <Outlet />;
      }
    }

    return <Outlet />;
  };

  return renderContent();
};

export default PersistLogin;
