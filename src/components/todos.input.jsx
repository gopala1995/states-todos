import { useState } from "react";

export const Todosinput = ({ handellclick }) => {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        onChange={(e) => {
          setText(e.target.value);
        }}
        type="text"
      />

      <button
        onClick={() => {
          handellclick(text);
        }}
      >
        Add Todo
      </button>
    </div>
  );
};
