import React from "react";
import "../../index.css"

export default function Risk({ basis, content }) {
  return (
    <div
      className={`text-white text-sm bg-green-700 ${basis} px-3 py-1 mr-4 mt-6 rounded-full`}
    >
      {content}
    </div>
  );
}
