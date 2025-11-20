export default function Footer() {
  return (
    <footer className=" relative w-full bg-[#000000] text-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Layout (< 768px) */}
        <div className="block md:hidden bg-gradient-to-b from-[#000223] via-[#000115] to-[#000223] -mx-4 sm:-mx-6 -my-8 sm:-my-12 px-4 sm:px-6 py-8">
          {/* Logo Section */}
          <div className="flex flex-col items-center mb-8">
            <img 
              src="/footer-logo.png" 
              alt="ROELLI WORLD" 
              className="h-20 sm:h-24 w-auto"
               style={{ filter: "drop-shadow(0px -1px 11px #FFE229)" }}
            />
            <p className="text-gray-400 text-xs mt-3 text-center">
              Service provided by
            </p>
            <p className="text-gray-400 text-xs">
              ROELLI WORLD, © 2025
            </p>
          </div>

          {/* Useful Information */}
          <div className="mb-8">
            <h3 className="text-[#FFE100] font-semibold text-[26px] leading-[28px] mb-4 text-center" style={{ fontFamily: 'Roboto' }}>
              Useful information
            </h3>
            <ul className="space-y-2 text-center">
              <li>
                <a href="#" className="text-[#F4F8FF] text-[18px] leading-[28px] hover:text-[#FFE100] transition-colors" style={{ fontFamily: 'Roboto' }}>
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-[#F4F8FF] text-[18px] leading-[28px] hover:text-[#FFE100] transition-colors" style={{ fontFamily: 'Roboto' }}>
                  Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-[#F4F8FF] text-[18px] leading-[28px] hover:text-[#FFE100] transition-colors" style={{ fontFamily: 'Roboto' }}>
                  System requirements
                </a>
              </li>
              <li>
                <a href="#" className="text-[#F4F8FF] text-[18px] leading-[28px] hover:text-[#FFE100] transition-colors" style={{ fontFamily: 'Roboto' }}>
                  Recommended devices
                </a>
              </li>
            </ul>
          </div>

          {/* Join the Community */}
          <div>
            <h3 className="text-[#FFE100] font-semibold text-[26px] leading-[28px] mb-4 text-center" style={{ fontFamily: 'Roboto' }}>
              Join the community
            </h3>
            <div className="flex justify-center gap-2 flex-wrap">
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="Discord"
              >
                <img src="/social-discord.png" alt="Discord" className="w-8 h-8" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="Telegram"
              >
                <img src="/social-telegram.png" alt="Telegram" className="w-8 h-8" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="YouTube"
              >
                <img src="/social-youtube.png" alt="YouTube" className="w-8 h-8" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="Facebook"
              >
                <img src="/social-facebook.png" alt="Facebook" className="w-8 h-8" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="TikTok"
              >
                <img src="/social-tiktok.png" alt="TikTok" className="w-8 h-8" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <img src="/social-instagram.png" alt="Instagram" className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>

        {/* Desktop Layout (>= 768px) */}
        <div className="hidden md:flex md:justify-between md:items-start bg-[#000000]">
          {/* Logo Section - Left */}
          <div className="flex flex-col relative right-5">
            <img
              src="/footer-logo.png"
              alt="ROELLI WORLD"
              className="h-16 md:h-20 lg:h-24 xl:h-28 w-auto"
              style={{ filter: "drop-shadow(0px -1px 6px #FFE229)" }}
            />

            <p className="text-gray-400 text-xs mt-6 relative left-3">
              Service provided by
            </p>
            <p className="text-gray-400 text-xs relative left-3">
              ROELLI WORLD, © 2025
            </p>
          </div>

          {/* Useful Information - Center */}
          <div className="xl:relative right-24">
            <h3 className="text-[#FFE100] font-semibold text-[26px] leading-[28px] mb-4" style={{ fontFamily: 'Roboto' }}>
              Useful information
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#F4F8FF] text-[17px] leading-[28px] hover:text-[#FFE100] transition-colors" style={{ fontFamily: 'Roboto' }}>
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-[#F4F8FF] text-[17px] leading-[28px] hover:text-[#FFE100] transition-colors" style={{ fontFamily: 'Roboto' }}>
                  Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-[#F4F8FF] text-[17px] leading-[28px] hover:text-[#FFE100] transition-colors" style={{ fontFamily: 'Roboto' }}>
                  System requirements
                </a>
              </li>
              <li>
                <a href="#" className="text-[#F4F8FF] text-[17px] leading-[28px] hover:text-[#FFE100] transition-colors" style={{ fontFamily: 'Roboto' }}>
                  Recommended devices
                </a>
              </li>
            </ul>
          </div>

          {/* Join the Community - Right */}
          <div>
            <h3 className="text-[#FFE100] font-semibold text-[26px] leading-[28px] mb-4" style={{ fontFamily: 'Roboto' }}>
              Join the community
            </h3>

            {/* Use CSS Grid for predictable rows/columns:
                - md (>=768px): grid-cols-3 => 3 columns, so two rows (3 + 3) when 6 items exist
                - lg (>=1024px): grid-cols-6 => single row with 6 items
                This fixes the "two columns" problem by explicitly controlling column count. */}
            <div className="grid gap-3 md:grid-cols-4 lg:grid-cols-6">
              <a 
                href="#" 
                className="flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="Discord"
              >
                <img src="/social-discord.png" alt="Discord" className="w-9 h-9" />
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="Telegram"
              >
                <img src="/social-telegram.png" alt="Telegram" className="w-9 h-9" />
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="YouTube"
              >
                <img src="/social-youtube.png" alt="YouTube" className="w-9 h-9" />
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="Facebook"
              >
                <img src="/social-facebook.png" alt="Facebook" className="w-9 h-9" />
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="TikTok"
              >
                <img src="/social-tiktok.png" alt="TikTok" className="w-9 h-9" />
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <img src="/social-instagram.png" alt="Instagram" className="w-9 h-9" />
              </a>
            </div>
          </div>
        </div>
      </div>
        <div className="absolute inset-x-0 bottom-0 h-1 bg-cyan-400/90" />
    </footer>
  );
}