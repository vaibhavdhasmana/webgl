import React, { useEffect, useRef } from "react";
import Webcam from "react-webcam";

const imageWidth = 280;
const imageHeight = 300;
const WebCamera = (porps) => {
  const { clickPhoto, setClickPhoto, setRecievePhoto } = porps;
  const cameras = useRef(null);
  const videoConstraints = {
    width: imageWidth,
    height: imageHeight,
    facingMode: "user",
  };
  const photoClick = () => {
    const imageSrc = cameras.current.getScreenshot();
    setRecievePhoto(imageSrc);
    setClickPhoto(false);
  };
  useEffect(() => {
    if (clickPhoto) {
      console.log("clicked");
      photoClick();
    }
  }, [clickPhoto]);
  return (
    <div className="w-100 d-flex justify-content-center">
      <Webcam
        audio={false}
        ref={cameras}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
      />
    </div>
  );
};
export default WebCamera;
