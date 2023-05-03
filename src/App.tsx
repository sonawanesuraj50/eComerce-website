import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart, Home, Login } from "./modules";
import { Paths } from "./constants";
import { Layout, ProtectedRoute, PersistLogin } from "./shared";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PersistLogin />}>
            <Route path={Paths.login} element={<Login />} />
            <Route element={<ProtectedRoute />}>
              <Route element={<Layout />}>
                <Route path={Paths.home} element={<Home />} />
                <Route path={Paths.cart} element={<Cart />} />
                <Route path={Paths.about} element={<h1>About</h1>} />
                <Route path={Paths.contact} element={<h1>Contact</h1>} />
                <Route path={Paths.notFound} element={<h1>Not Found</h1>} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
