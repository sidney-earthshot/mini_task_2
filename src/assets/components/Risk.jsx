import React from "react";
import "../../index.css"

export default function Risk({ basis, content, bg_colour }) {
  return (
    <div
      className={`text-white text-xs ${bg_colour} ${basis} px-3 py-1 mr-4 mt-6 rounded-full`}
    >
      {content}
    </div>
  );
}
