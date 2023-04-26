import React, { useState } from "react";
import WebCamera from "../../Component/WebCamera/WebCamera";
import { nextImage, tuborgLogoBlue } from "../../Component/CommonImages";
import style from "./style.module.css";
import Button from "../../Component/Button/Button";
import { frameImage } from "../../Component/CommonImages";
const ImageCapture = () => {
  const [showCamera, setShowCamera] = useState(false);
  const [clickPhoto, setClickPhoto] = useState(false);
  const [recievePhoto, setRecievePhoto] = useState("");
  const retakePhoto = () => {
    setRecievePhoto("");
  };
  return (
    <div className={`${style["container"]}`}>
      <div className="d-flex justify-content-center margin-top30">
        <img className={`${style["tuborg-logo"]}`} src={tuborgLogoBlue} />
      </div>
      {!recievePhoto && (
        <div className="margin-top20">
          <div
            className={`d-flex justify-content-center ${style["image-frame"]}`}
          >
            <img className={`${style["frame-style"]}`} src={frameImage} />
            <div className={`${style["webcamera"]}`}>
              <WebCamera
                clickPhoto={clickPhoto}
                setClickPhoto={setClickPhoto}
                setRecievePhoto={setRecievePhoto}
              />
            </div>
          </div>
          <div className={` d-flex justify-content-center margin-top40`}>
            <Button
              className={`${style["button-style"]}`}
              title={"CLICK"}
              onClick={(e) => {
                console.log("clicked out");
                setClickPhoto(true);
              }}
            />
          </div>
        </div>
      )}
      {recievePhoto !== "" && (
        <div className={`preview-image`}>
          <div className={`w-100 h-50 flex-center flex-column margin-top40`}>
            <img src={recievePhoto} />
          </div>
          <div className={` d-flex justify-content-center margin-top40`}>
            <Button
              className={`${style["button-style"]}`}
              title={"RETAKE"}
              onClick={(e) => retakePhoto()}
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default ImageCapture;
