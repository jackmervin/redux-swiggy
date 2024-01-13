import { Provider } from "react-redux";
import "./App.css";
import { store } from "./app/store";
import StartingPage from "./Component/StartingPage/StartingPage";
import Hotels from "./Hotels.json";
import HomePage from "./Component/HomePage/HomePage";
import { HashRouter, Route, Routes } from "react-router-dom";
import Profile from "./Component/HomePage/Profile/Profile";
function App() {
  console.log(Hotels);
  return (
    <Provider className="App" store={store}>
      <HashRouter>
        <Routes>
          <Route path="/" exact element={<StartingPage />} />
          <Route path="Home" element={<HomePage />} />
          <Route path="my_account" element={<Profile />} />
        </Routes>
      </HashRouter>
    </Provider>
  );
}

export default App;
