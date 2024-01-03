import { useState } from "react";
import "./App.css";
import Risk from "./assets/components/Risk";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col items-center w-fit">
        <div className="bg-blue-400 p-5 w-[450px] mt-5 rounded-xl">
          <p className="text-white">🌳BAD OUTCOME #1</p>
          <p className="text-white text-3xl">900M = malnutrition.</p>
          <p className="text-white">
            Globally, 1 in 3 ≠ safe drinking water, mostly ≠ LDC's
          </p>

          {/* 3 green buttons */}
          <div className="flex">
            <Risk basis={"4/12"} content={"HIGH..."} />
            <Risk basis={"4/12"} content={"HIGH..."} />
            <Risk basis={"3/12"} content={"HIGH..."} />
          </div>

          <p className="text-white text-xl">SUMMARY</p>
          <p className="text-white">{`😮Inaction cost: {xx}, {yy} QALY's, {zz} monetary`}</p>
          <p className="text-white">{`💰Cost to solve problem now: {xx} people, {yy} invenestment, {zz} opportunity cost v. others.`}</p>
          <p className="text-white">{`💰Opportunity for innovation. Reduce cost by {xx%} by fixing {1, 2, 3}, improving ROI by {yy} per $ + hr spent.`}</p>
          <p className="text-white">
            🌎Gap: Technologies $ operational risk. High CapEx.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
