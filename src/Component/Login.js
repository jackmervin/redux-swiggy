import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLogin, getLoginData, getloginCon } from "../Slice/loginSlice";
import { getSignUp } from "../Slice/signUpSlice";

function LoginPage() {
  //Set useState and useDispatch
  const users = useSelector((state) => state.signUp.users);
  const loginCon = useSelector((state) => state.login.loginCon);
  const dispatch = useDispatch();

  const [phoneNo, setPhoneNo] = useState("");
  //Handle Component
  const HandleClose = () => {
    dispatch(getLogin(false));
  };
  //Handle both component
  const handChangPage = () => {
    dispatch(getLogin(false));
    dispatch(getSignUp(true));
  };
  //
  const handleSubmit = (e) => {
    e.preventDefault();
    if (phoneNo === "") {
      return alert("enter the phoneNo");
    }
    if (phoneNo.length !== 10) {
      return alert("enter valid number");
    }
    var condi = users.some((user) => {
      return phoneNo === user.phoneNo;
    });
    var logindata = users.filter((user) => {
      return phoneNo === user.phoneNo;
    });
    dispatch(getLoginData(logindata));
    setPhoneNo("");
    condi
      ? alert("login successful")
      : alert("Login Failed: Your user ID  is incorrect");
    condi && dispatch(getLogin(false));
    dispatch(getloginCon(condi));
  };
  return (
    <>
      <div className="singnPage">
        <div className="leftSide2" onClick={HandleClose}></div>
        <div className="rightSide2">
          <svg
            style={{
              cursor: "pointer",
              marginTop: "30px",
              marginLeft: "40px",
              marginBottom: "10px",
            }}
            onClick={HandleClose}
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            width="17"
            viewBox="0 0 384 512"
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
          <div className="nav">
            <div className="navLeft">
              <div className="navhead">Login</div>
              <div
                className="navp"
                style={{ cursor: "pointer" }}
                onClick={handChangPage}
              >
                <span style={{ color: "black" }}>or </span>create an account
              </div>
            </div>
            <div className="navRight">
              <img
                className="jdo4W"
                imageurl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
                width="100"
                height="105"
                imageid=""
                alt="img renderer"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
              />
            </div>
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <input
              placeholder="Phone Number"
              type="number"
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
            />
            <button type="submit">LOGIN</button>
            <p>By creating an account, I accept the Terms & Conditions</p>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
