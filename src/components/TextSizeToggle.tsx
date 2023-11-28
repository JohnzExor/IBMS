"use client";

import * as React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const TextSizeToggle = () => {
  const [position, setPosition] = React.useState("normal");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className=" text-left shadow-md rounded-md dark:text-white p-2 border bg-transparent text-black w-full font-semibold hover:bg-skipColor hover:bg-opacity-50 duration-500 dark:hover:bg-opacity-25">
          Set Text Size <br />
          <span className="font-normal">
            Adjust the size of your text by specifying your preferred text size
            in this section.
          </span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Text Size</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="small">Small</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="normal">Normal</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="large">Large</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default TextSizeToggle;
