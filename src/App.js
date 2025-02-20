import Translations from "./Translations";
import Q1 from "./components/Q1";
import Q2 from "./components/Q2";
import Q3 from "./components/Q3";
import Q4 from "./components/Q4";
import Q5 from "./components/Q5";
function App() {
  return (
    <div>
      <div style={{ padding: "10px", backgroundColor: "black" }}>
        <h1 style={{ textAlign: "center", color: "white" }}>Dooo</h1>

        <Translations />
      </div>

      <div style={{ padding: "100px" }}>
        <h1 style={{ textAlign: "center" }}>Jautajumi</h1>

        <div>
          <Q1 />
        </div>

        <br />

        <div>
          <Q2 />
        </div>

        <br />

        <div>
          <Q3 />
        </div>

        <br />

        <div>
          <Q4 />
        </div>

        <br />

        <div>
          <Q5 />
        </div>
      </div>
    </div>
  );
}

export default App;
