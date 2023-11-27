"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
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
        <Button className=" border bg-transparent text-black p-5 w-full hover:bg-nextColor hover:bg-opacity-50 duration-500">
          Set Text Size
        </Button>
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
