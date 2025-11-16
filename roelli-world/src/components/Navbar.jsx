import "../css/app.css";

export default function Navbar() {
  return (
    <nav className="w-full bg-black flex items-center box-border overflow-x-hidden h-[55px] sm:h-[60px] md:h-[69px]">
      <div className="flex justify-between items-center px-2 sm:px-7 md:px-5 lg:px-10 w-full box-border">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="/logo.png"
            alt="Roelli World Logo"
            className="h-[30px] sm:h-[35px] md:h-[45px] lg:h-[50px] xl:h-[65px] w-auto"
          />
        </div>

        {/* Right section */}
        <div className="flex items-center gap-6 sm:gap-3 md:gap-[25px] lg:gap-12 ml-auto shrink">
          {/* Links */}
          <ul className="flex list-none m-0 p-0 gap-5 sm:gap-3 md:gap-[25px] lg:gap-14 shrink">
            <li className="text-[#FFE229] text-[9px] sm:text-xs md:text-base lg:text-[17px] cursor-pointer whitespace-nowrap">
              Home
            </li>
            <li className="text-white text-[9px] sm:text-xs md:text-base lg:text-[17px] cursor-pointer whitespace-nowrap">
              About us
            </li>
            <li className="text-white text-[9px] sm:text-xs md:text-base lg:text-[17px] cursor-pointer whitespace-nowrap">
              Contacts
            </li>
          </ul>

          {/* Language selector */}
          <div className="flex items-center gap-1 sm:gap-[2px] md:gap-[3px] lg:gap-1 text-[11px] sm:text-xs md:text-sm lg:text-[17px] text-white cursor-pointer flex-shrink-0">
            <img
              src="./Flag.png"
              alt="English"
              className="h-3 sm:h-[14px] md:h-4 lg:h-[18px] w-auto"
            />
            <span>En</span>
            <span>▼</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
