import { Provider } from "react-redux";
import "./App.css";
import { store } from "./app/store";
import StartingPage from "./Component/StartingPage";
import Hotels from "./Hotels.json";
import HomePage from "./Component/HomePage/HomePage";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
function App() {
  console.log(Hotels);
  return (
    <Provider className="App" store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<StartingPage />} />
          <Route path="Home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
