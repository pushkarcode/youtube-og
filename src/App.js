import React, { useState } from "react";
import Head from "./components/Head";
import Body from "./components/Body";
import Watchpage from "./components/Watchpage";
import { Provider } from "react-redux";
import store from "./utils/store";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import MainContainer from "./components/MainContainer";
import ButtonList from "./components/ButtonList";
const App = () => {
  const [categroy, setCategroy] = useState(0);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body categroy={categroy} setCategroy={setCategroy} />,
      children: [
        {
          path: "/",
          element: <MainContainer categroy={categroy} />,
        },
        {
          path: "watch",
          element: <Watchpage />,
        },
        {
          path: "search",
          element: <ButtonList />,
        }
       
      ],
    },
  ]);

  return (
    <Provider store={store}>
        <Head />
      <div className="w-screen min-h-screen bg-[#f6ebf2d6]3">
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
};

export default App;
