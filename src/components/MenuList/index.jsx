"use client";

import { menuData } from "@/lib/menuData";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MenuList() {
  const pathname = usePathname();

  const listItems = menuData.map((item) => (
    <li
      className={`px-8 py-4 ${pathname === item.path ? "bg-[#3a363f] text-yellow" : ""} hover:bg-[#3a363f] hover:text-yellow`}
      key={item.id}>
      <Link href={item.path}>
        <span className="flex items-center gap-4">
          {item.icon} {item.label}
        </span>
      </Link>
    </li>
  ));
  return (
    <ul className="mt-8 flex flex-col text-base font-medium text-gray">
      {listItems}
    </ul>
  );
}
