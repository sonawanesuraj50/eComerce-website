import ReactDOM from "react-dom/client";
import { AuthProvider } from "react-auth-kit";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "./logic/reducers";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <AuthProvider
      authType={"cookie"}
      authName={"_auth"}
      cookieDomain={window.location.hostname}
      cookieSecure
    >
      <App />
      <Toaster />
    </AuthProvider>
  </Provider>
);
