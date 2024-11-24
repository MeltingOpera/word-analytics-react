import React, { useState } from "react";
import Warning from "./Warning";

interface TextareaProps {
  text: string;
  setText: (value: string) => void;
}

export default function Textarea({ text, setText }: TextareaProps) {
  const [warningText, setWarningText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let newText = e.target.value;

    if (newText.includes("<script>")) {
      setWarningText("No script tag allowed!");
      newText = newText.replace("<script>", "");
    } else {
      setWarningText("");
    }
    setText(newText);
  };
  return (
    <div className="textarea">
      <textarea
        onChange={handleChange}
        value={text}
        placeholder="Enter your text"
        spellCheck="false"
      />
      {warningText && <Warning message={warningText} />}
    </div>
  );
}
