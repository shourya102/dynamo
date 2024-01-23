import React, { useEffect, useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const TextBox = (props) => {
  let text = "";
  if (props.children) text = props.children;

  const [fixedText, setFixedText] = useState(text);
  const [begin, setBegin] = useState(0);
  const [end, setEnd] = useState(props.length);
  const [isFitting, setIsFitting] = useState(true);
  const [scrollCount, setScrollCount] = useState(0);

  useEffect(() => {
    setEnd(scrollCount * 10 + props.length);
    if (text.length > props.length) {
      setFixedText(text.substring(begin, end));
      setIsFitting(false);
    } else {
      setFixedText(text);
      setIsFitting(true);
    }
  }, [text, begin, end, props.length, scrollCount]);

  const handleUp = () => {
    if (begin >= 10) {
      setBegin(begin - 10);
      setEnd(end - 10);
      setScrollCount((prevState) => prevState - 1);
    }
  };

  const handleDown = () => {
    if (end <= text.length) {
      setBegin(begin + 10);
      setEnd(end + 10);
      setScrollCount((prevState) => prevState + 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-1">
      {!isFitting && (
        <button
          onClick={handleUp}
          disabled={begin <= 0}
          className={`${begin <= 0 ? "text-gray-500" : "hover:text-skin-hover"}`}
        >
          <AiOutlineUp />
        </button>
      )}
      <p>{fixedText}</p>
      {!isFitting && (
        <button
          onClick={handleDown}
          disabled={end >= text.length}
          className={`${end >= text.length ? "text-gray-500" : "hover:text-skin-hover"}`}
        >
          <AiOutlineDown />
        </button>
      )}
    </div>
  );
};

export default TextBox;
