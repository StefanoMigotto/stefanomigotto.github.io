import logo from "./logo.svg";
import "./css/App.css";

//components
import { Header } from "./components/Header.js";
import { AboutUs } from "./components/HomeComponents/AboutUs.js";

//icon
import { BiCaretRight } from "react-icons/bi";

//import media / shape
import shape_1 from "./assets/shape/shape_1.png";
import shapedivider_1 from "./assets/shape/shape_divider_1.png";

function App() {
  return (
    <div className="App">
      <Header />
      <img class="shape_1" src={shape_1} alt="" />
      <div className="container_welcome_message">
        <h1>Ciao, Io sono</h1>
        <h1>Stefano Migotto</h1>
      </div>
      <div className="c_shapedivider">
        <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 390"
          xmlns="http://www.w3.org/2000/svg"
          class="transition duration-300 ease-in-out delay-150"
        >
          <path
            d="M 0,400 C 0,400 0,133 0,133 C 177.59999999999997,145 355.19999999999993,157 505,155 C 654.8000000000001,153 776.8,137 928,131 C 1079.2,125.00000000000001 1259.6,129 1440,133 C 1440,133 1440,400 1440,400 Z"
            stroke="none"
            stroke-width="0"
            fill="#7bdcb5"
            fill-opacity="0.53"
            class="transition-all duration-300 ease-in-out delay-150 path-0"
          ></path>
          <path
            d="M 0,400 C 0,400 0,266 0,266 C 122.66666666666669,286 245.33333333333337,306 390,297 C 534.6666666666666,288 701.3333333333333,250.00000000000003 880,240 C 1058.6666666666667,229.99999999999997 1249.3333333333335,248 1440,266 C 1440,266 1440,400 1440,400 Z"
            stroke="none"
            stroke-width="0"
            fill="#7bdcb5"
            fill-opacity="1"
            class="transition-all duration-300 ease-in-out delay-150 path-1"
          ></path>
        </svg>
      </div>
      <AboutUs />
    </div>
  );
}

export default App;
