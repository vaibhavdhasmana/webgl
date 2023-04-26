// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { positions, Provider } from "react-alert";
// import AlertTemplate from "react-alert-template-basic";
// import Home from "./Pages/Home/Home";
// import ImageCapture from "./Pages/ImageCapture/ImageCapture";
// import UnityCom from "./Pages/UnityCom/UnityCom";
// const options = {
//   timeout: 5000,
//   position: positions.BOTTOM_CENTER,
// };
// function App() {
//   return (
//     <Provider template={AlertTemplate} {...options}>
//       <BrowserRouter>
//         <Routes>
//           <Route exact path="/" element={<UnityCom />} />
//           <Route exact path="/result" element={<ImageCapture />} />
//         </Routes>
//       </BrowserRouter>
//     </Provider>
//   );
// }

// export default App;
import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "build/myunityapp.loader.js",
    dataUrl: "build/myunityapp.data",
    frameworkUrl: "build/myunityapp.framework.js",
    codeUrl: "build/myunityapp.wasm",
  });

  return <Unity unityProvider={unityProvider} />;
}
export default App;
