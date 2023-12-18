import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store , persistor} from "./store";
import App from "./App.jsx";
import "./index.scss";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
       <PersistGate persistor={persistor}>
        <App />
       </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
