import { BadgeIcon, BookOpen, GraduationCap } from "lucide-react";
import Image from "next/image";

const SideNav = () => {
  const menu = [
    {
      id: 1,
      title: "All Courses",
      icon: BookOpen,
    },
    {
      id: 2,
      title: "Membership",
      icon: BadgeIcon,
    },
    {
      id: 3,
      title: "Be Instructor",
      icon: GraduationCap,
    },
  ];

  return (
    <div className="p-5 bg-white shadow-sm border h-screen">
      <Image src="/edu-craft-logo.png" alt="logo" width={170} height={80} />
      <hr className="mt-7" />
      <div className="mt-6">
        {menu.map(({ id, title, ...item }) => (
          <div
            key={id}
            className="group flex gap-3 mt-2 p-3 text-[18px] items-center text-gray-500 cursor-pointer hover:bg-primary hover:text-white rounded-md transition-all ease-in-out duration-200"
          >
            <item.icon className="group-hover:animate-bounce" />
            <h2>{title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
