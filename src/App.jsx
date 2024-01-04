import { useState } from "react";
import "./App.css";
import Risk from "./assets/components/Risk";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col items-center w-fit xl:w-full">
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
        <div className="h-[100px] bg-gray-700 w-[3px]"></div>
        <div
          className={`bg-[url("https://plus.unsplash.com/premium_photo-1683836722388-8643468c327d?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] w-[450px] h-[110px] bg-cover flex items-center rounded-lg`}
        >
          <p className="text-white text-3xl pl-6 font-bold">By country.</p>
        </div>

        {/* divider */}
        <div className="h-[150px] bg-gray-700 w-[3px]"></div>

        {/* div to adjust the intersection point of all 3 lines */}
        <div className="flex mt-[-40px]">
          {/* 2 skewed lines */}
          <div className="h-[5px] bg-sky-700 w-[550px] -skew-y-[10deg]"></div>
          <div className="h-[5px] bg-sky-700 w-[550px] skew-y-[10deg]"></div>
        </div>

        {/* bottom div for boxes */}
        <div className="h-[100px] my-[30px] flex z-10 [&>*]:w-[450px] space-x-3 [&>*]:p-5 [&>*]:h-fit">
          <div className="bg-blue-400 rounded-lg">
            <p className="text-white text-sm">🌳TREE 1.1 & ☂️UMBRELLA 1.1</p>
            <p className="text-white text-2xl">40m in Ethiopia.</p>
            <p className="text-white text-sm">
              Causing XX deaths, YY reduction in QALY's, ZZ $cost.
            </p>

            <div className="bg-neutral-800 p-6 rounded-lg mt-4">
              <p className="text-white font-bold text-xl">problem profile.</p>
            </div>

            <div className="flex">
              <Risk
                basis={"basis-4/12"}
                content={"HIGH..."}
                bg_colour={"bg-green-700"}
              />
              <Risk
                basis={"basis-4/12"}
                content={"HIGH..."}
                bg_colour={"bg-green-700"}
              />
              <Risk
                basis={"basis-3/12"}
                content={"HIGH..."}
                bg_colour={"bg-green-700"}
              />
            </div>
          </div>
          <div className="bg-blue-400 rounded-lg">
            <p className="text-white text-sm">🌳TREE 1.2 & ☂️UMBRELLA 1.2</p>
            <p className="text-white text-2xl">32m in Afghanistan.</p>
            <p className="text-white text-sm">
              Causing XX deaths, YY reduction in QALY's, ZZ $cost.
            </p>

            <div className="bg-neutral-800 p-6 rounded-lg mt-4">
              <p className="text-white font-bold text-xl">problem profile.</p>
            </div>

            <div className="flex">
              <Risk
                basis={"basis-4/12"}
                content={"MED SOLVABILITY"}
                bg_colour={"bg-yellow-500"}
              />
              <Risk
                basis={"basis-4/12"}
                content={"MED SOLVABILITY"}
                bg_colour={"bg-yellow-500"}
              />
              <Risk
                basis={"basis-3/12"}
                content={"HIGH IMPACT"}
                bg_colour={"bg-green-700"}
              />
            </div>
          </div>

          <div className="bg-blue-400 rounded-lg">
            <p className="text-white text-sm">🌳TREE 1.2 & ☂️UMBRELLA 1.3</p>
            <p className="text-white text-2xl">163m in india.</p>
            <p className="text-white text-sm">
              Causing XX deaths, YY reduction in QALY's, ZZ $cost.
            </p>

            <div className="bg-neutral-800 p-6 rounded-lg mt-4">
              <p className="text-white font-bold text-xl">problem profile.</p>
            </div>

            <div className="flex">
              <Risk
                basis={"basis-4/12"}
                content={"HIGH..."}
                bg_colour={"bg-green-700"}
              />
              <Risk
                basis={"basis-4/12"}
                content={"HIGH..."}
                bg_colour={"bg-green-700"}
              />
              <Risk
                basis={"basis-3/12"}
                content={"HIGH..."}
                bg_colour={"bg-green-700"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
