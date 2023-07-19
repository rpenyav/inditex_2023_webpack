import React from "react";
import AppRoutes from "./routes/AppRoutes";
import store from "./redux/store";
import { Provider } from "react-redux";

export const App: React.FC = () => {
  return (
    <div>
      <Provider store={store}>
        <AppRoutes></AppRoutes>
      </Provider>
    </div>
  );
};
