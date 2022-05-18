import "./App.css";
import Main from "./Pages/Main";
import Header from "./components/Header";
import LowerMenu from "./components/LowerMenu";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div>
        <Header />

        <Main />

        <LowerMenu />
      </div>
    </div>
  );
}

export default App;
