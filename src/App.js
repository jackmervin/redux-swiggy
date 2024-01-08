import { Provider } from "react-redux";
import "./App.css";
import { store } from "./app/store";
import StartingPage from "./Component/StartingPage";

function App() {
  return (
    <Provider className="App" store={store}>
      <StartingPage />
    </Provider>
  );
}

export default App;
