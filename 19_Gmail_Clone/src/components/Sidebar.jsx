import { IoMdStar, IoMdSend } from "react-icons/io";
import { LuPencil } from "react-icons/lu";
import { MdOutlineWatchLater, MdOutlineDrafts } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";

const sidebarItems = [
  {
    icon: <LuPencil size={24} />,
    text: "Inbox",
  },
  {
    icon: <IoMdStar size={24} />,
    text: "Starred",
  },
  {
    icon: <MdOutlineWatchLater size={24} />,
    text: "Snoozed",
  },
  {
    icon: <IoMdSend size={24} />,
    text: "Sent",
  },
  {
    icon: <MdOutlineDrafts size={24} />,
    text: "Drafts",
  },
  {
    icon: <FaAngleDown size={24} />,
    text: "More",
  },
];

const Sidebar = () => {
  return (
    <div className="w-[15%]">
      <div className="p-3">
        <button className="flex items-center gap-2 p-4 rounded-2xl hover:shadow bg-[#c2e7ff]">
          <LuPencil size={24} />
          Compose
        </button>
      </div>
      <div className="text-gray-500">
        {sidebarItems.map((item) => {
          return (
            <div key={item.text} className="flex items-center gap-4 pl-6 py-1 rounded-r-full hover:cursor-pointer my-2 hover:bg-gray-200">
              {item.icon}
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
