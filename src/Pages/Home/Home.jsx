import React, { useState } from "react";
import style from "./styles.module.css";
import Headlines from "../../Component/Headlines/Headline";
import axios from "axios";
import { useAlert } from "react-alert";
import Form from "react-bootstrap/Form";
import { SERVER_URL } from "../../Constant/constant";
import Button from "../../Component/Button/Button";
import { tuborgLogoBlue } from "../../Component/CommonImages";

const Home = () => {
  const arr = new Array(100);
  const alert = useAlert();
  const [landingVideo, setLandingVideo] = useState(true);
  const [showRegistration, setShowRegistration] = useState(false);
  const [concentCheck, setConcentCheck] = useState(false);

  const dorpDownYear = () => {
    const year = new Date().getFullYear() - 25;
    return Array.from(new Array(100), (v, i) => (
      <option key={i} value={year - i}>
        {year - i}
      </option>
    ));
  };

  const defalutFormValues = {
    name: "",
    email: "",
    mobile: "",
    birth_year: "",
    city: "",
  };
  const choiceValue = 1;
  const [formValues, setFormValues] = React.useState(defalutFormValues);
  const sumitDetails = async () => {
    console.log("formValues..", formValues);
    // document.getElementById("submit-btn").disabled = true;
    if (!formValues.name) {
      alert.error("Name is Required !");
    } else if (!formValues.mobile) {
      alert.error("Mobile number is Required !");
    } else if (formValues.mobile.length !== 10) {
      alert.error("Please enter the 10 digit Mobile number !");
    } else if (!formValues.email) {
      alert.error("Please enter the email address !");
    } else if (!validateEmail(formValues.email)) {
      alert.error("Please enter the valid email address !");
    } else if (!formValues.city) {
      alert.error("City is Required !");
    } else if (!formValues.birth_year) {
      alert.error("Birth year is Required !");
    } else if (!concentCheck) {
      alert.error("Please Check the require concent !");
    } else {
      window.location.href = "/play";
      const result = await axios.post(`${SERVER_URL}/api/register`, formValues);
      console.log("SaveData", result);
      if (result?.data?.status_code === 200) {
        console.log("in");
        document.getElementById("submit-btn").disabled = false;
        //   setShowRegister(false);
        //   setShowCountDown(true);
      } else {
        alert.error("Something went wrong");
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (e.target.name === "mobile") {
      setFormValues((prev) => {
        return {
          ...prev,
          ["mobile"]: e.target.value.replace(/\D/g, ""),
        };
      });
    } else {
      setFormValues((prev) => {
        return { ...prev, [name]: value };
      });
    }
  };
  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  return (
    <div className={`${style["register-page"]}`}>
      <div className="d-flex justify-content-center margin-top30">
        <img className={`${style["tuborg-logo"]}`} src={tuborgLogoBlue} />
      </div>
      {landingVideo && (
        <div className={`${style["video-container"]} flex-center flex-column`}>
          <div>
            <video
              className={`${style["video-div"]}`}
              src={
                "https://res.cloudinary.com/dfis0emmp/video/upload/v1682452686/Tuborg_720_ha3yri.mp4"
              }
              autoPlay={false}
              controls
            ></video>
          </div>
          <Button
            className={`${style["button-style"]} margin-top12`}
            title="Next"
            onClick={() => {
              setLandingVideo(false);
              setShowRegistration(true);
            }}
          />
        </div>
      )}
      {showRegistration && (
        <div
          className={`${style["registration-containter"]} flex-center margin-top20 text-white`}
        >
          <div className={`${style["form-container"]}`}>
            <Headlines
              className="font-size18 line-height14 font-weight800 text-center"
              text="Please Enter Your Details"
            />
            <div className={`input-section`}>
              <form className={""}>
                <div className="form-group margin-top16">
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={formValues.name}
                    className={`${style["form-control"]}`}
                    id="user_name"
                    aria-describedby="emailHelp"
                    placeholder="Full Name*"
                  />
                  <input
                    type="text"
                    name="email"
                    onChange={handleChange}
                    value={formValues.email}
                    className={`${style["form-control"]}`}
                    id="user_email"
                    placeholder="EMAIL ID*"
                  />
                  <input
                    type="tel"
                    name="mobile"
                    onChange={handleChange}
                    value={formValues.mobile}
                    maxLength="10"
                    className={`${style["form-control"]}`}
                    id="user_mobile_no"
                    placeholder="MOBILE NUMBER*"
                  />
                  <input
                    type="text"
                    name="city"
                    onChange={handleChange}
                    value={formValues.city}
                    className={`${style["form-control"]}`}
                    id="city"
                    aria-describedby="emailHelp"
                    placeholder="CITY*"
                  />
                  {/* <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={formValues.birthYear}
                    className={`${style["form-control"]}`}
                    id="user_name"
                    aria-describedby="emailHelp"
                    placeholder="BIRTH YEAR*"
                  /> */}
                  <div className={``}>
                    <select
                      name="birth_year"
                      className={`${style["form-control"]} ${style["select-option"]}`}
                      onChange={handleChange}
                      value={formValues.birth_year}
                    >
                      {dorpDownYear()}
                    </select>
                  </div>
                  <div className={` d-flex justify-content-center gap6`}>
                    <input
                      className="m-0 p-0"
                      type="radio"
                      id="age1"
                      name="age"
                      value={choiceValue}
                      checked={choiceValue == concentCheck}
                      onChange={() => setConcentCheck(choiceValue)}
                    />
                    <label className="m-0 p-0" for="age1">
                      <Headlines
                        className={`font-size10 text-white font-weight400`}
                        text="PLEASE CONFIRM IF YOU ARE ABOVE 25 YEARS"
                      />
                    </label>
                  </div>

                  {/* <div className="radio">
                    <label>
                      <input
                        type="radio"
                        value={1}
                        checked={concentCheck}
                        onChange={setConcentCheck(!concentCheck)}
                      />
                      <Headlines
                        className={`font-size10 text-white font-weight400`}
                        text="PLEASE CONFIRM IF YOU ARE ABOVE 25 YEARS*"
                      />
                    </label>
                  </div> */}
                </div>
              </form>
            </div>

            <div className="d-flex justify-content-center">
              <Button
                onClick={sumitDetails}
                className={`${style["button-style"]} margin-top12 d-flex justify-content-center`}
                title="SUBMIT"
              />
            </div>
          </div>
        </div>
      )}
      {/* <div
        className={`d-flex justify-content-center ${style["header-margin"]}`}
      >
        <Headlines
          className={`${style["register-header-text"]}`}
          text={"Register"}
        />
      </div> */}
      {/* <div className={`d-flex justify-content-center`}>
        <form className={`${style["form-container"]}`}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={formValues.name}
              className={`${style["form-control"]}`}
              id="user_name"
              aria-describedby="emailHelp"
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              name="mobile"
              onChange={handleChange}
              value={formValues.mobile}
              maxLength="10"
              className={`${style["form-control"]}`}
              id="user_mobile_no"
              placeholder="Mobile Number"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="email"
              onChange={handleChange}
              value={formValues.email}
              className={`${style["form-control"]}`}
              id="user_email"
              placeholder="Email"
            />
          </div>
          <small
            id="err-text"
            className="text-danger text-center mt-2 w-100"
          ></small>
        </form>
      </div> */}

      {/* <div className={`w-100 d-flex justify-content-center`}>
        <div
          className={`${style["submit-btn"]}`}
          id="submit-btn"
          onClick={sumitDetails}
        >
          <Headlines
            className={`${style["submit-btn-text"]}`}
            text={"Submit"}
          />
        </div>
      </div> */}
    </div>
  );
};
export default Home;
