'use client'
import { Sun } from "lucide-react";
import cn from "clsx";
import Image from "next/image";
import s from "./Sidebar.module.scss";
import Link from "next/link";
import { MENU } from "./sidebar.data";
import { usePathname } from "next/navigation";
const Sidebar = () => {
  const pathname = usePathname()
  return (
    <aside className={s.sidebar}>
      <Image priority src={"/logo.svg"} alt="logo" width={50} height={50} />
      <div>
        {MENU.map((item, index) => (
          <Link
            key={index}
            href={item.url}
            className={cn({
              [s.active]: pathname === item.url,
            })}
          >
            <item.Icon size={27} />
          </Link>
        ))}
      </div>
      <Sun />
    </aside>
  );
};

export default Sidebar;
