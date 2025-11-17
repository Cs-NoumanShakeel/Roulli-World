import "../css/app.css";

export default function Section2() {
  return (
    <div className="pb-44 Page2-section flex flex-col md:flex-row w-full min-h-[75vh] bg-gradient-to-r from-black to-[#040627] text-white px-4 sm:px-8 md:px-10 lg:px-12 py-10 overflow-hidden">
      {/* LEFT SECTION */}
      <div className="Page2-left-section flex-1 md:flex-[1.2] lg:flex-[1.1] flex justify-center items-center relative pb-6 md:pb-0 mb-8 md:mb-0">
        <div
          className="relative rounded-full overflow-hidden flex justify-center items-center 
      w-[180px] sm:w-[240px] md:w-[380px] lg:w-[480px] xl:w-[600px] max-w-full transition-all duration-300"
        >
          <img
            src="/world2.png"
            alt="World"
            className="w-full h-full object-cover"
          />
          <div className="circle-text absolute text-center w-full px-2 sm:px-4">
            <h1 className="font-cinzel text-[32px] sm:text-[40px] md:text-[60px] lg:text-[75px] xl:text-[95px] font-normal leading-[100%]">
              ROELLI
            </h1>
            <h1 className="font-cinzel text-[32px] sm:text-[40px] md:text-[60px] lg:text-[75px] xl:text-[95px] font-normal leading-[100%]">
              WORLD
            </h1>
            <h3 className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[20px] xl:text-[22px] font-semibold text-[#13D0EF] leading-[100%] mt-2">
              PLAY. EARN. EVOLVE.
            </h3>
          </div>
        </div>

        {/* Bottom images */}
        <div className="circle-bottom-images top-[75%] flex gap-4 mt-8 md:mt-6 justify-center">
          <img
            src="/qrcode.png"
            alt="QR Code"
            className="w-[50px] sm:w-[60px] md:w-[80px] lg:w-[100px] lg:mt-2"
          />
          <img
            src="/mobile.png"
            alt="Mobile"
            className="w-[60px] sm:w-[70px] md:w-[100px] lg:w-[120px]"
          />
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="Page2-right-section flex-1 md:flex-[0.8] lg:flex-[0.9] flex flex-col justify-center pl-0 md:pl-6 pr-0 md:pr-4 pb-4 md:pb-8 text-center md:text-left">
        <h1 className="text-[22px] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[50px] uppercase leading-[1.2] font-inter font-bold bg-gradient-to-r from-[#20D4F2] to-[#00C6F9] bg-clip-text text-transparent">
          <span className="block">ENTER THE</span>
          <span className="block">WORLD</span>
          <span className="block">OF ROELLI</span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[20px] text-[#bcbcbc] leading-[1.5] mt-4">
          <span className="block">Make the heroes, earn rewards</span>
          <span className="block">and join the adventure.</span>
        </p>

        <div className="app-images flex gap-4 flex-wrap justify-center md:justify-start mt-6">
          <img
            src="/apple.png"
            alt="Apple Store"
            className="w-[90px] sm:w-[120px] md:w-[140px] lg:w-[160px] xl:w-[200px] object-contain"
          />
          <img
            src="/google.png"
            alt="Google Play"
            className="w-[90px] sm:w-[120px] md:w-[140px] lg:w-[160px] xl:w-[200px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}
