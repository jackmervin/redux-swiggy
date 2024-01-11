import React, { useState } from "react";
import "./SignUp.css";
import { useDispatch } from "react-redux";
import { addUsers, getSignUp } from "../Slice/signUpSlice";
import { getLogin } from "../Slice/loginSlice";
let id = 0;
function SignPage() {
  const dispatch = useDispatch();
  const [userdata, setuserdata] = useState({
    phoneNo: "",
    name: "",
    email: "",
    id: id++,
  });

  const HandleClose = () => {
    dispatch(getSignUp(false));
  };
  //
  const handChangPage = () => {
    dispatch(getSignUp(false));
    dispatch(getLogin(true));
  };
  //
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userdata.phoneNo === "") {
      return alert("Please enter the phoneNo");
    }
    if (userdata.phoneNo.length !== 10) {
      return alert("Please enter a valid phoneNo");
    }
    if (userdata.name === "") {
      return alert("Please enter the Name");
    }
    if (userdata.email === "") {
      return alert("Please enter a valid email");
    }
    dispatch(addUsers(userdata));
    setuserdata({ ...userdata, phoneNo: "", name: "", email: "" });
    dispatch(getSignUp(false));
    dispatch(getLogin(true));
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
              <div className="navhead">Sign up</div>
              <div
                className="navp"
                style={{ cursor: "pointer" }}
                onClick={handChangPage}
              >
                <span style={{ color: "black" }}>or </span>login to your account
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
              value={userdata.phoneNo}
              onChange={(e) =>
                setuserdata({ ...userdata, phoneNo: e.target.value })
              }
            />
            <input
              placeholder="Name"
              type="text"
              value={userdata.name}
              onChange={(e) =>
                setuserdata({ ...userdata, name: e.target.value })
              }
            />
            <input
              placeholder="Email"
              type="email"
              value={userdata.email}
              onChange={(e) =>
                setuserdata({ ...userdata, email: e.target.value })
              }
            />
            <div>Have a referral code?</div>
            <button type="submit">SIGN UP</button>
            <p>By creating an account, I accept the Terms & Conditions</p>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignPage;
