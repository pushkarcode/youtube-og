import React from "react";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
const App = () => {
  return (
   <Provider store={store}>
     <div className="w-screen h-screen bg-[#f6ebf2d6]">
      <Head />
      <Body />
    </div> 
   </Provider>
  );
};

export default App;
