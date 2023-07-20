import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HomePageView from "../components/HomePageView";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../redux/root-reducer";

test("renderizado sin errores", () => {
  const store = configureStore({
    reducer: rootReducer,

    preloadedState: {},
  });

  render(
    <Provider store={store}>
      <BrowserRouter>
        <HomePageView />
      </BrowserRouter>
    </Provider>
  );
});
