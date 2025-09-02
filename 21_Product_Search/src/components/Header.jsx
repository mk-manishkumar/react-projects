import { IoIosSearch } from "react-icons/io";

const Header = ({ input, setInput, onSearch }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(); 
  };

  return (
    <div className="h-20 bg-black flex justify-center items-center py-4">
      <input type="text" className="bg-white w-[90%] lg:w-1/3 outline-none p-2" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Search Products..." />
      <IoIosSearch size={20} className="ml-[-40px] cursor-pointer" onClick={handleSearch} />
    </div>
  );
};

export default Header;
