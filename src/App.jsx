import { useState } from "react";
import "./App.css";
import Risk from "./assets/components/Risk";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col items-center">
        {/* top box */}
        <div className="bg-blue-400 p-5 w-[450px] mt-5 rounded-xl">
          <p className="text-white text-sm">🌳FOREST & ☂️UMBRELLA #1</p>
          <p className="text-white text-3xl my-1">Bad water & sanitation.</p>
          <p className="text-white mb-2">
            Globally, 1 in 3 ≠ safe drinking water, mostly ≠ LDC's
          </p>

          <p className="text-white">{`😮Inaction cost: {xx}, {yy} QALY's, {zz} monetary`}</p>
          <p className="text-white">{`💰Cost to solve problem now: {xx} people, {yy} invenestment, {zz} opportunity cost v. others.`}</p>
          <p className="text-white">{`💰Opportunity for innovation. Reduce cost by {xx%} by fixing {1, 2, 3}, improving ROI by {yy} per $ + hr spent.`}</p>
          <p className="text-white">
            🌎Gap: Technologies $ operational risk. High CapEx.
          </p>

          {/* 3 green buttons */}
          <div className="flex">
            <Risk basis={"basis-4/12"} content={"HIGH..."} />
            <Risk basis={"basis-4/12"} content={"HIGH..."} />
            <Risk basis={"basis-3/12"} content={"HIGH..."} />
          </div>
        </div>

        {/* divider */}
        <div className="h-[300px] bg-gray-700 w-[3px]"></div>
        {/* <img
          src={`https://plus.unsplash.com/premium_photo-1683836722388-8643468c327d?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
          alt="world"
          className="w-[450px] h-[150px] absolute mt-[450px] rounded-lg"
        />

        <p className="text-left text-white text-3xl w-[450px] pl-5 absolute mt-[510px]">By country.</p> */}
        <div
          className={`bg-[url("https://plus.unsplash.com/premium_photo-1683836722388-8643468c327d?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] w-[450px] h-[110px] bg-cover flex items-center rounded-lg`}
        >
          <p className="text-white text-3xl pl-6 font-bold">By country.</p>
        </div>
      </div>
    </>
  );
}

export default App;
