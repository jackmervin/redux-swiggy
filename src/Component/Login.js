import React from "react";
import { useDispatch } from "react-redux";
import { getLogin } from "../Slice/loginSlice";

function LoginPage() {
  //Set useState and useDispatch
  const dispatch = useDispatch();
  //

  //Get user data

  //Handle Component
  const HandleClose = () => {
    dispatch(getLogin(false));
  };
  //Handle both component
  const handChangPage = () => {};
  //
  const handleSubmit = () => {};
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
            <input placeholder="Phone Number" type="number" />
            <button type="submit">LOGIN</button>
            <p>By creating an account, I accept the Terms & Conditions</p>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
