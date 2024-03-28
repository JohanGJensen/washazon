"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { HiSearch, HiX } from "react-icons/hi";

interface FilterProps {
  query: string | undefined;
}

const Filter: React.FC<FilterProps> = ({ query }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams);
    const value = e.target.value;

    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    replace(`?${params.toString()}`)
  };

  const handleOnClick = (value: boolean) => {
    setOpen(value);
  };

  const handleOnKeyDown = (
    e: React.KeyboardEvent<SVGElement>,
    value: boolean
  ) => {
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
            defaultValue={query}
            className={
              "bg-transparent outline-none focus:outline-[#88aedd] focus:outline-1 focus:rounded-sm placeholder:text-[#88aedd] text-[#FFF]"
            }
            placeholder={"search product..."}
            onChange={handleSearch}
            // onBlur={() => setOpen(false)}
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
