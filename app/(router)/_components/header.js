import { Button } from "@/components/ui/button";
import { BellDot, SearchIcon } from "lucide-react";
import React from "react";

const Header = () => (
  <div className="p-4 bg-white flex justify-between">
    <div className="flex gap-3 border rounded p-2">
      <SearchIcon className="h-5 w-5" />
      <input type="text" placeholder="Search..." className="outline-none" />
    </div>
    <div className="flex items-center gap-3">
      <BellDot className="text-gray-500 cursor-pointer hover:text-violet-700" />
      <Button className="focus:ring focus:ring-purple-300">Get Started</Button>
    </div>
  </div>
);

export default Header;
