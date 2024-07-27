import "./FormattingArea.css";
import "draft-js/dist/Draft.css";
import React, { useEffect, useRef, useState } from "react";
import {
  BiBold,
  BiCode,
  BiHighlight,
  BiItalic,
  BiStrikethrough,
  BiUnderline,
} from "react-icons/bi";
import { Circle } from "react-color/lib/components/circle/Circle";
import { CSSTransition } from "react-transition-group";
import { convertToRaw, Editor, EditorState, RichUtils } from "draft-js";
import draftToHtml from "draftjs-to-html";

const FormattingArea = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(),
  );
  const domEditor = useRef(null);
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);
  const rawContentState = convertToRaw(editorState.getCurrentContent());
  const [strikethrough, setStrikethrough] = useState(false);
  const [code, setCode] = useState(false);

  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  };

  useEffect(() => {
    const markUp = draftToHtml(rawContentState, {
      trigger: "#",
      separator: " ",
    });
    props.setDescription(markUp);
  }, [props, rawContentState]);

  useEffect(() => {
    let currentStyles = JSON.stringify(editorState.getCurrentInlineStyle());
    currentStyles = JSON.parse(currentStyles);
    setBold(currentStyles.includes("BOLD"));
    setItalic(currentStyles.includes("ITALIC"));
    setUnderline(currentStyles.includes("UNDERLINE"));
    setStrikethrough(currentStyles.includes("STRIKETHROUGH"));
    setCode(currentStyles.includes("CODE"));
  }, [editorState]);

  const onToggleInlineStyle = (style, e) => {
    e.preventDefault();
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
    domEditor.current.focus();
  };

  return (
    <div className="flex flex-col w-full rounded-lg overflow-clip border border-skin-border-2 shadow-sm">
      <div className="bg-skin-base-3 rounded-t-2xl flex p-2 items-center justify-start">
        <div className="flex space-x-3 pr-5 border-r-2 border-skin-border-2">
          <button
            className={
              bold ? "text-skin-bright-rev rounded-md bg-skin-bright" : ""
            }
            onMouseDown={(e) => onToggleInlineStyle("BOLD", e)}
          >
            <BiBold />
          </button>
          <button
            className={
              italic ? "text-skin-bright-rev rounded-md bg-skin-bright" : ""
            }
            onMouseDown={(e) => onToggleInlineStyle("ITALIC", e)}
          >
            <BiItalic />
          </button>
        </div>
        <div className="flex space-x-3 px-5 border-r-2 border-skin-border-2">
          <button
            className={
              strikethrough
                ? "text-skin-bright-rev rounded-md bg-skin-bright"
                : ""
            }
            onMouseDown={(e) => onToggleInlineStyle("STRIKETHROUGH", e)}
          >
            <BiStrikethrough />
          </button>
          <button
            className={
              underline ? "text-skin-bright-rev rounded-md bg-skin-bright" : ""
            }
            onMouseDown={(e) => onToggleInlineStyle("UNDERLINE", e)}
          >
            <BiUnderline />
          </button>
          <button>
            <BiHighlight />
          </button>
        </div>
        <div className="flex space-x-3 px-5">
          <button
            className={
              code ? "text-skin-bright-rev rounded-md bg-skin-bright" : ""
            }
            onMouseDown={(e) => onToggleInlineStyle("CODE", e)}
          >
            <BiCode />
          </button>
          <div>
            <div
              onClick={() => setIsVisible((prevState) => !prevState)}
              className="w-6 cursor-pointer h-6 bg-red-600 rounded-full"
            ></div>
            <div className="relative">
              <CSSTransition
                in={isVisible}
                timeout={500}
                unmountOnExit
                classNames="fade"
              >
                <div className="absolute z-10 p-2 bg-skin-fill-2-solid w-fit rounded-2xl -translate-x-56 translate-y-4">
                  <Circle
                    colors={["#fff", "#000", "#f00", "#0f0", "#ff0", "#00f"]}
                  />
                </div>
              </CSSTransition>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${props.className} rounded-b-2xl bg-skin-base-3 text-skin-bright h-64 p-3 w-full overflow-y-scroll`}
      >
        <Editor
          ref={domEditor}
          placeholder="Insert text here..."
          editorState={editorState}
          onChange={setEditorState}
          handleKeyCommand={handleKeyCommand}
        />
      </div>
    </div>
  );
};

export default FormattingArea;
