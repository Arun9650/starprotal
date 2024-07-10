"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

type TSection = { redirectUrl: string; title: string };

type TSidebarSection = {
  section: TSection[];
  activeLink: string;
  setActiveLink: React.Dispatch<React.SetStateAction<string>>;
};

export default function NavbarSection({
  section,
  activeLink,
  setActiveLink,
}: TSidebarSection) {
  const router = useRouter();
  return section.map(({ redirectUrl,  title }, index) => (
    <Link
    className={` flex relative items-center  gap-2 rounded-[8px] self-center stroke-white  p-3 px-2 mx-2 text-base font-medium leading-5 ${
        activeLink === redirectUrl
          ? "text-white"
          : " hover:text-white"
      }`}
      key={index}
      href={redirectUrl}
      onClick={(e) => {
        e.preventDefault();
        setActiveLink(redirectUrl);
        router.push(redirectUrl);
      }}
    >

{
  activeLink === redirectUrl ? (
    <div className="h-1 absolute left-0 -bottom-2 w-full rounded-full bg-white"></div>
  ) : null
}

      {title}
    </Link>
  ));
}
