import React from "react";

export default function Risk({ basis, content }) {
  return (
    <div
      className={`text-white text-sm bg-green-700 basis-${basis} px-3 py-1 mr-4 my-2 rounded-full`}
    >
      {content}
    </div>
  );
}
