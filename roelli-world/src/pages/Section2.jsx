import "../css/app.css";

export default function Section2() {
  return (
    <div className="Page2-section flex w-full min-h-[70vh] bg-gradient-to-r from-black to-[#040627] text-white px-8 py-10 overflow-hidden">

      {/* LEFT SECTION */}
      <div className="Page2-left-section flex-1 flex justify-center items-center relative pb-[60px]">
        <div className="circle-image relative rounded-full overflow-hidden flex justify-center items-center">
          <img src="/world2.png" alt="World" className="w-full h-full object-cover" />
          <div className="circle-text absolute text-center w-full px-4">
            <h1 className="font-cinzel text-[60px] font-normal leading-[100%]">ROELLI</h1>
            <h1 className="font-cinzel text-[60px] font-normal leading-[100%]">WORLD</h1>
            <h3 className="text-[16px] font-semibold text-[#13D0EF] leading-[100%]">PLAY. EARN. EVOLVE.</h3>
          </div>
        </div>

        {/* Moved outside circle-image */}
        <div className="circle-bottom-images">
          <img src="/qrcode.png" alt="QR Code" className="code" />
          <img src="/mobile.png" alt="Mobile" className="mobile" />
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="Page2-right-section flex-1 flex flex-col justify-center pl-8 pr-4 pb-8">
        <h1 className="text-[46px] uppercase leading-[1.2] font-inter font-bold bg-gradient-to-r from-[#20D4F2] to-[#00C6F9] bg-clip-text text-transparent">
          <span>ENTER THE</span>
          <span>WORLD</span>
          <span>OF ROELLI</span>
        </h1>

        <p className="text-base text-[#bcbcbc] leading-[1.5] mt-4">
          <span>Make the heroes,earn rewards</span>
          <span>and join the adventure.</span>
        </p>

        <div className="app-images flex gap-4 flex-wrap mt-6">
          <img src="/apple.png" alt="Apple Store" className="w-[150px] object-contain" />
          <img src="/google.png" alt="Google Play" className="w-[150px] object-contain" />
        </div>
      </div>
    </div>
  );
}
