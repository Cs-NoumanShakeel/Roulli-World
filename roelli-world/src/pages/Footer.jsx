export default function Footer() {
  return (
    <footer className="w-full bg-[#000000] text-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Layout (< 768px) */}
        <div className="block md:hidden">
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

          {/* Legal Information */}
          <div className="mb-8">
            <h3 className="text-[#FFE100] font-semibold text-[26px] leading-[28px] mb-4 text-center" style={{ fontFamily: 'Roboto' }}>
              Legal information
            </h3>
            <ul className="space-y-2 text-center">
              <li>
                <a href="#" className="text-[#F4F8FF] text-[18px] leading-[28px] hover:text-[#FFE100] transition-colors" style={{ fontFamily: 'Roboto' }}>
                  Confidentiality
                </a>
              </li>
              <li>
                <a href="#" className="text-[#F4F8FF] text-[18px] leading-[28px] hover:text-[#FFE100] transition-colors" style={{ fontFamily: 'Roboto' }}>
                  Agreement
                </a>
              </li>
            </ul>
          </div>

          {/* Join the Community */}
          <div>
            <h3 className="text-[#FFE100] font-semibold text-[26px] leading-[28px] mb-4 text-center" style={{ fontFamily: 'Roboto' }}>
              Join the community
            </h3>
            <div className="flex justify-center gap-3 flex-wrap">
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
        <div className="hidden md:grid md:grid-cols-4 md:gap-8 lg:gap-12">
          {/* Logo Section */}
          <div className="flex flex-col">
          <img
          src="/footer-logo.png"
          alt="ROELLI WORLD"
          className="h-20 lg:h-110 w-44 "
          style={{ filter: "drop-shadow(0px -1px 9px #FFE229)" }}
          />


            <p className="text-gray-400 text-xs mt-6 relative left-3">
              Service provided by
            </p>
            <p className="text-gray-400 text-xs relative left-3">
              ROELLI WORLD, © 2025
            </p>
          </div>

          {/* Useful Information */}
          <div>
            <h3 className="text-[#FFE100] font-semibold text-[26px] leading-[28px] mb-4" style={{ fontFamily: 'Roboto' }}>
              Useful information
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#F4F8FF] text-[19px] leading-[28px] hover:text-[#FFE100] transition-colors" style={{ fontFamily: 'Roboto' }}>
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-[#F4F8FF] text-[19px] leading-[28px] hover:text-[#FFE100] transition-colors" style={{ fontFamily: 'Roboto' }}>
                  Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-[#F4F8FF] text-[19px] leading-[28px] hover:text-[#FFE100] transition-colors" style={{ fontFamily: 'Roboto' }}>
                  System requirements
                </a>
              </li>
              <li>
                <a href="#" className="text-[#F4F8FF] text-[19px] leading-[28px] hover:text-[#FFE100] transition-colors" style={{ fontFamily: 'Roboto' }}>
                  Recommended devices
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Information */}
          <div>
            <h3 className="text-[#FFE100] font-semibold text-[26px] leading-[28px] mb-4" style={{ fontFamily: 'Roboto' }}>
              Legal information
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#F4F8FF] text-[19px] leading-[28px] hover:text-[#FFE100] transition-colors" style={{ fontFamily: 'Roboto' }}>
                  Confidentiality
                </a>
              </li>
              <li>
                <a href="#" className="text-[#F4F8FF] text-[19px] leading-[28px] hover:text-[#FFE100] transition-colors" style={{ fontFamily: 'Roboto' }}>
                  Agreement
                </a>
              </li>
            </ul>
          </div>

          {/* Join the Community */}
          <div>
            <h3 className="text-[#FFE100] font-semibold text-[26px] leading-[28px] mb-4" style={{ fontFamily: 'Roboto' }}>
              Join the community
            </h3>
            <div className="flex gap-3 flex-wrap">
              <a 
                href="#" 
                className="w-9 h-9 flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="Discord"
              >
                <img src="/social-discord.png" alt="Discord" className="w-9 h-9" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="Telegram"
              >
                <img src="/social-telegram.png" alt="Telegram" className="w-9 h-9" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="YouTube"
              >
                <img src="/social-youtube.png" alt="YouTube" className="w-9 h-9" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="Facebook"
              >
                <img src="/social-facebook.png" alt="Facebook" className="w-9 h-9" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="TikTok"
              >
                <img src="/social-tiktok.png" alt="TikTok" className="w-9 h-9" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <img src="/social-instagram.png" alt="Instagram" className="w-9 h-9" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}