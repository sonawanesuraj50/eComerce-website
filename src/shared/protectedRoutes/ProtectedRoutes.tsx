import { Outlet, Navigate } from "react-router-dom";
import { useIsAuthenticated } from "react-auth-kit";
import { Paths } from "src/constants";

const ProtectedRoute = () => {
  const isAuthenticated = useIsAuthenticated();
  console.log(isAuthenticated());
  const renderContent = () => {
    if (!isAuthenticated()) {
      return <Navigate to={Paths.login} />;
    }

    return <Outlet />;
  };

  return renderContent();
};

export default ProtectedRoute;
