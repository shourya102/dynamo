import React, { useState } from "react";

const HSelector = (props) => {
  const [current, setCurrent] = useState(
    props.buttonList[0].name || props.buttonList[0],
  );

  return (
    <div className="flex justify-center">
      <div className="flex flex-wrap border border-skin-border-2 rounded-lg overflow-clip">
        {props.buttonList.map((item, index) => {
          const itemName = item.name || item;
          const itemColor = item.color ? `text-${item.color}` : "";
          return (
            <button
              key={index}
              onClick={() => {
                setCurrent(itemName);
                props.setItem(itemName.toUpperCase());
              }}
              className={`${current === itemName ? "bg-skin-fill-2 shadow-inner" : ""} 
                            bg-transition p-4 ${itemColor} flex-grow bg-skin-base-3`}
            >
              {itemName}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default HSelector;
