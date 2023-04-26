import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
const UnityCom = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "build/WebCricket.loader.js",
    dataUrl: "build/WebCricket.data",
    frameworkUrl: "build/WebCricket.framework.js",
    codeUrl: "build/WebCricket.wasm",
  });

  return <Unity unityProvider={unityProvider} />;
};
export default UnityCom;
