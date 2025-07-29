import React from "react";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import { Separator } from "@/components/ui/separator";
export default function App() {
  return (
    <div className="h-screen">
      <Navbar />
      <Separator />
      <Home />
    </div>
  );
}
