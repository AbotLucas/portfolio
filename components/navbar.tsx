"use client";

import { itemsNavbar } from "@/data";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import MotionTransition from "@/components/transition-component";

const Navbar = () => {
  const router = usePathname();
  return (
    <MotionTransition
      position="bottom"
      className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10"
    >
      <nav>
        <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-tertiary background-blur-sm border-1 border-primary">
          {itemsNavbar.map((item) => (
            <div
              key={item.id}
              className={`px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-quaternary/50 ${
                router == item.link && "bg-quaternary/50"
              }`}
            >
              <Link href={item.link}>{item.icon}</Link>
            </div>
          ))}
        </div>
      </nav>
    </MotionTransition>
  );
};

export default Navbar;
