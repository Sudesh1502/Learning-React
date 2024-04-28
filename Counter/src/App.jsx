import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import DisplayCounter from "./components/DisplayCounter";
import Card from "./components/Card";
import Controls from "./components/Controls"
import { useSelector } from "react-redux";
import ToggleMessage from "./components/ToggleMessage";


function App() {
  const toggler = useSelector(store => store.privacy)
  return (
    <>
      <div>React + Redux</div>
      <center>
        <Card>
          <div className="px-4 py-5 my-5 text-center">
            <Header />
            <div className="col-lg-6 mx-auto">
              {toggler === false ? <DisplayCounter />: <ToggleMessage/>}
              <Controls />
            </div>
          </div>
        </Card>
      </center>
    </>
  );
}

export default App;
