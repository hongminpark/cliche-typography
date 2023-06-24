import { useState } from "react";

const InputBox = () => {
  const [letters, setLetters] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLetters(event.target.value.split(""));
  };

  return (
    <input
      type="text"
      className="w-40 cursor-text border-b-2 border-black font-medium focus:outline-none"
      onChange={handleInputChange}
    />
  );
};

export default InputBox;
