"use client";

import React from "react";
import { HiSearch, HiX } from "react-icons/hi";

interface FilterProps {}

const Filter: React.FC<FilterProps> = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);

  const handleOnClick = (value: boolean) => {
    setOpen(value);
  };

  const handleOnKeyDown = (e: React.KeyboardEvent<SVGElement>, value: boolean) => {
    if (e.key === "Enter") {
      setOpen(value); 
    }
  };

  React.useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  return (
    <div className={"bg-[#243c5a] rounded-md p-1 flex"}>
      {!open && (
        <HiSearch
          tabIndex={0}
          type={"button"}
          className={"cursor-pointer"}
          color={"#FFF"}
          size={"1.5em"}
          onClick={() => handleOnClick(true)}
          onKeyDown={(e) => handleOnKeyDown(e, true)}
        />
      )}
      {open && (
        <>
          <input
            ref={inputRef}
            className={
              "bg-transparent outline-none focus:outline-[#88aedd] focus:outline-1 focus:rounded-sm placeholder:text-[#FFF] text-[#FFF]"
            }
            placeholder={"search product..."}
          />
          <HiX
            tabIndex={0}
            type={"button"}
            className={"cursor-pointer ml-1"}
            color={"#FFF"}
            size={"1.5em"}
            onClick={() => handleOnClick(false)}
            onKeyDown={(e) => handleOnKeyDown(e, false)}
          />
        </>
      )}
    </div>
  );
};

export default Filter;
