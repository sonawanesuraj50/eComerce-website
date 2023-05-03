import ReactDOM from "react-dom/client";
import { AuthProvider } from "react-auth-kit";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./logic/reducers";
import { Toaster } from "react-hot-toast";

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
