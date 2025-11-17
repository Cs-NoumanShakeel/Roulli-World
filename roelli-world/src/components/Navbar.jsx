import "../css/app.css";

export default function Navbar() {
  return (
    <nav className="w-full bg-black flex items-center box-border overflow-x-auto h-[55px] sm:h-[60px] md:h-[69px]">
      <div className="flex justify-between items-center px-2 sm:px-4 md:px-6 lg:px-10 w-full box-border">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="/logo.png"
            alt="Roelli World Logo"
            className="h-[25px] sm:h-[30px] md:h-[40px] lg:h-[50px] xl:h-[60px] w-auto"
          />
        </div>

        {/* Right section */}
        <div className="flex items-center gap-4 sm:gap-3 md:gap-5 lg:gap-10 ml-auto shrink-0 flex-wrap">
          {/* Links */}
          <ul className="flex flex-wrap list-none m-0 p-0 gap-3 sm:gap-3 md:gap-5 lg:gap-10 shrink-0">
            <li className="text-[#FFE229] text-[9px] sm:text-xs md:text-sm lg:text-base cursor-pointer whitespace-nowrap">
              Home
            </li>
            <li className="text-white text-[9px] sm:text-xs md:text-sm lg:text-base cursor-pointer whitespace-nowrap">
              About us
            </li>
            <li className="text-white text-[9px] sm:text-xs md:text-sm lg:text-base cursor-pointer whitespace-nowrap">
              Contacts
            </li>
          </ul>

          {/* Language selector */}
          <div className="flex items-center gap-1 sm:gap-2 md:gap-3 lg:gap-1 text-[10px] sm:text-xs md:text-sm lg:text-base text-white cursor-pointer flex-shrink-0">
            <img
              src="./Flag.png"
              alt="English"
              className="h-[10px] sm:h-[14px] md:h-4 lg:h-[18px] w-auto"
            />
            <span>En</span>
            <span>▼</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
