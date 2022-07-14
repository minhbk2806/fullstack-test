import { getUrlParams } from "./utitls/getUrlParams";
import { objectLiteral } from "./utitls/objectLiteral";
import "./App.css";

function App() {
  // getUrlParams
  const pattern = "staticOne/:paramOne/staticTwo/staticThree/:paramTwo";

  const testCases = [
    "staticZero/one",
    "staticOne/one",
    "staticOne/one/staticThree/three",
    "staticOne/one/staticTwo/staticThree/two",
  ];

  // objectLiteral
  type Data = { id: string; name?: string; count: number };
  const before: Data = { id: "1", count: 0 };
  const after: Data = { id: "1", name: "khan", count: 1 };

  return (
    <div className="App">
      <header className="App-header">
        {/* getUrlParams */}
        <div>
          <h1>getUrlParams</h1>
          {testCases.map((test) => (
            <div key={test}>
              <span>{test}</span>
              <span>{` -----> `}</span>
              <span>{JSON.stringify(getUrlParams(test, pattern))}</span>
            </div>
          ))}
        </div>
        <br />
        {/* objectLiteral */}
        <div>
          <h1>objectLiteral</h1>
          <div>
            <p>Before: {JSON.stringify(before)}</p>
            <p>After: {JSON.stringify(after)}</p>
            <p>Result: {JSON.stringify(objectLiteral(before, after))}</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
