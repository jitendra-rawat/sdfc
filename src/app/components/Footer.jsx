"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathName = usePathname();

  const sections = [
    {
      title: "Club",
      items: [
        { title: "Home", path: "/" },
        { title: "About Us", path: "/" },
        { title: "Contact Us", path: "/" },
        { title: "Gallery", path: "/" },
        { title: "Club Members", path: "/" },
      ],
    },
    {
      title: "Tournaments",
      items: [
        { title: "Pipalkoti", path: "/" },
        { title: "Gopeshwar", path: "/" },
        { title: "Gauchar", path: "/" },
      ],
    },
    {
      title: "Terms",
      items: [
        { title: "Privacy Policy", path: "/" },
        { title: "Terms of Service", path: "/" },
      ],
    },
    {
      title: "Resources",
      items: [
        { title: "News", path: "/" },
      ],
    },
  ];

  const renderMenu = (items) =>
    items.map((item) => (
      <li key={item.path}>
        <Link
          href={item.path}
          className={`text-lg transition-all ${
            "text-[#FFF]"
          } hover:text-[#FB3]`}
        >
          {item.title}
        </Link>
      </li>
    ));

  return (
    <footer className="bg-black py-20">
      <div className="container m-auto max-w-7xl px-4">
        <div className="dm-sans flex flex-wrap justify-between items-start gap-x-8">
          <div className="flex-shrink-0 mb-8 md:mb-0">
            <Link href="/">
              <Image src="/logo.png" height={200} width={200} alt="Club Logo" />
            </Link>
          </div>
          {sections.map((section) => (
            <div key={section.title} className="flex-1 mb-8 md:mb-0">
              <p className="text-xs font-semibold uppercase text-gray-400 mb-4">
                {section.title}
              </p>
              <ul className="space-y-2">{renderMenu(section.items)}</ul>
            </div>
          ))}
        </div>

        <hr className="border-gray-600 my-8" />

        <div className="flex flex-wrap justify-between">
          <div className="flex flex-col mb-8 md:mb-0">
            <p className="text-lg text-[#FB3] font-bold uppercase mb-2">
              United Together, Stronger Forever
            </p>
            <Link
              href="/"
              className="text-[#FB3] text-sm font-semibold hover:text-white"
            >
              Join the Club
            </Link>
          </div>
          <div className="flex flex-wrap gap-4 ">
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100085296380470"
              className="text-[#FB3] text-sm font-semibold hover:text-white"
            >
              Developed by- Jitendra Rawat
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
