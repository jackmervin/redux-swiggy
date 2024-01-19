import "./Hotels.css";
import React, { useState } from "react";
import hotels from "../../../Hotels.json";
import {
  hodeldatesDelete,
  hotelDataGet,
  hoteldatescon,
  hotelAdd,
  hotelUpdate,
} from "../../../Slice/homePageSlice";
import { useDispatch, useSelector } from "react-redux";

function Hotels() {
  const dispatch = useDispatch();
  const hoteldates = useSelector((state) => state.homepage.hoteldates);
  const hotelcon = useSelector((state) => state.homepage.hotelcon);
  const addbtn = useSelector((state) => state.homepage.addbtn);
  //
  const [addbtnid, setaddbtnid] = useState([]);

  // console.log(addbtnid);
  const handleHotelDate = (id) => {
    var newdata = hotels.find((hotels) => {
      return id === hotels.id;
    });
    dispatch(hotelDataGet(newdata));
    dispatch(hoteldatescon(true));
  };
  // console.log(hoteldates);

  return (
    <>
      {!hotelcon && (
        <div className="HotelsContainer">
          <div className="HotelsHead">
            Restaurants with online food delivery in Chennai
          </div>
          <div className="hotels">
            {hotels.map((hotel) => (
              <div
                className="hotel"
                key={hotel.id}
                onClick={() => handleHotelDate(hotel.id)}
              >
                <img className="hotelImg" src={hotel.img} alt="img" />
                <div className="hoteloff">{hotel.discount}</div>
                <div className="HotelName">{hotel.hotelName}</div>
                <div className="HotelReating">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    role="img"
                    aria-hidden="true"
                    strokeColor="rgba(2, 6, 12, 0.92)"
                    fillColor="rgba(2, 6, 12, 0.92)"
                  >
                    <circle
                      cx="10"
                      cy="10"
                      r="9"
                      fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
                    ></circle>
                    <path
                      d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
                      fill="white"
                    ></path>
                    <defs>
                      <linearGradient
                        id="StoreRating20_svg__paint0_linear_32982_71567"
                        x1="10"
                        y1="1"
                        x2="10"
                        y2="19"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#21973B"></stop>
                        <stop offset="1" stop-color="#128540"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div style={{ margin: "auto 0", paddingLeft: "5px" }}>
                    {hotel.rating} • {hotel.minDeliveryOrder}mins
                  </div>
                </div>
                <div className="Place">{hotel.placeInChennai}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {hotelcon &&
        hoteldates.map((data) => (
          <div className="hotelPage">
            <div style={{ display: "flex" }}>
              <div
                className="hotelurl"
                onClick={() => {
                  dispatch(hoteldatescon(false));
                  dispatch(hodeldatesDelete());
                }}
              >
                Home &nbsp;/
              </div>
              <div className="hotelurl2">&nbsp; {data.hotelName}</div>
            </div>
            <div className="hoteldetails">
              <div className="detailsleft">
                <div className="hotelname">{data.hotelName}</div>
                <div className="Hotelplace">{data.placeInChennai} 4.0 km</div>
                <div style={{ display: "flex", marginTop: "5px" }}>
                  <img
                    style={{ width: 19, height: 19 }}
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/v1648208530/surgecreatives/info"
                    alt="img"
                  ></img>
                  <div className="hotelfar">
                    Far (4 kms) | Additional delivery fee will apply
                  </div>
                </div>
              </div>
              <div className="detailsright">
                <div
                  style={{
                    display: "flex",

                    margin: "10px 0 10px 18px",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    role="img"
                    aria-hidden="true"
                    strokeColor="rgba(2, 6, 12, 0.92)"
                    fillColor="rgba(2, 6, 12, 0.92)"
                  >
                    <circle
                      cx="10"
                      cy="10"
                      r="9"
                      fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
                    ></circle>
                    <path
                      d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
                      fill="white"
                    ></path>
                    <defs>
                      <linearGradient
                        id="StoreRating20_svg__paint0_linear_32982_71567"
                        x1="10"
                        y1="1"
                        x2="10"
                        y2="19"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#21973B"></stop>
                        <stop offset="1" stop-color="#128540"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="reatinghotel">{data.rating}</div>
                </div>
                <div
                  style={{
                    borderBottom: "1px solid #e9e9eb",
                    width: "60px",
                    margin: "auto",
                  }}
                ></div>
                <div className="reatingk">10k+rating</div>
              </div>
            </div>
            <div
              style={{ borderBottom: "1px dashed #d3d3d3", marginTop: "25px" }}
            ></div>
            <div style={{ display: "flex", gap: "5px", marginTop: "20px" }}>
              <svg
                style={{ marginTop: "2px" }}
                class="RestaurantTimeCost_icon__8UdT4"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <circle
                  r="8.35"
                  transform="matrix(-1 0 0 1 9 9)"
                  stroke="#3E4152"
                  stroke-width="1.3"
                ></circle>
                <path
                  d="M3 15.2569C4.58666 16.9484 6.81075 18 9.273 18C14.0928 18 18 13.9706 18 9C18 4.02944 14.0928 0 9.273 0C9.273 2.25 9.273 9 9.273 9C6.36399 12 5.63674 12.75 3 15.2569Z"
                  fill="#3E4152"
                ></path>
              </svg>
              <div
                style={{
                  color: "#3e4152",
                  fontSize: "16px",
                  fontWeight: "700",
                }}
              >
                {data.minDeliveryOrder} mins
              </div>
            </div>
            {data.menu.map((food) => (
              <div className="foodContainer" key={food.foodId}>
                <div className="leftsideFood">
                  <div className="foodname">{food.foodItem}</div>
                  <div className="foodprice">₹{food.price}</div>
                </div>
                <div className="rightsideFood">
                  <img src={food.img} alt="img"></img>
                  {addbtn === food.foodId ||
                  addbtnid.some((id) => {
                    return id === food.foodId;
                  }) ? (
                    <div className="cartBtn">
                      <div
                        className="min"
                        id={food.foodId}
                        onClick={(e) => {
                          if (food.quantity > 0) {
                            // food.quantity === 1 &&();
                            const a = data.menu.map((i) => {
                              if (Number(e.target.id) === i.foodId) {
                                return ([...data.menu][e.target.id] = {
                                  foodId: food.foodId,
                                  foodItem: food.foodItem,
                                  price: food.price,
                                  img: food.img,
                                  quantity: food.quantity - 1,
                                });
                              }

                              return null;
                            });
                            dispatch(hotelUpdate(a[food.foodId]));
                          }
                        }}
                      >
                        -
                      </div>
                      <div className="cartval">{food.quantity}</div>
                      <div
                        className="add"
                        id={food.foodId}
                        onClick={(e) => {
                          var a = data.menu.map((i) => {
                            if (Number(e.target.id) === i.foodId) {
                              return ([...data.menu][e.target.id] = {
                                foodId: food.foodId,
                                foodItem: food.foodItem,
                                price: food.price,
                                img: food.img,
                                quantity: food.quantity + 1,
                              });
                            }
                            return null;
                          });
                          dispatch(hotelUpdate(a[food.foodId]));
                        }}
                      >
                        +
                      </div>
                    </div>
                  ) : (
                    addbtn !== food.foodId && (
                      <div
                        id={food.foodId}
                        className="addbtn"
                        onClick={(e) => {
                          dispatch(hotelAdd(food.foodId));
                          food.foodId >= 0 &&
                            setaddbtnid(() => {
                              return [...addbtnid, food.foodId];
                            });
                          var a = data.menu.map((i) => {
                            if (Number(e.target.id) === i.foodId) {
                              return ([...data.menu][e.target.id] = {
                                foodId: food.foodId,
                                foodItem: food.foodItem,
                                price: food.price,
                                img: food.img,
                                quantity: food.quantity + 1,
                              });
                            }
                            return null;
                          });
                          dispatch(hotelUpdate(a[food.foodId]));
                        }}
                      >
                        ADD
                      </div>
                    )
                  )}
                </div>
              </div>
            ))}
            {/* {addbtn && menu.map((food) => {})} */}
          </div>
        ))}
    </>
  );
}

export default Hotels;
