import "../css/app.css";

export default function Page1Hero() {
  return (
    <div className="relative w-full max-w-full overflow-hidden page1-hero min-h-screen bg-[url('/world.png')] bg-cover bg-center bg-no-repeat text-white flex flex-col items-center justify-center px-4 py-8 box-border">
      {/* Text Overlay */}
      <div className="overlay-text text-center w-full p-6 box-border mb-12 sm:mb-16 md:mb-20 lg:mb-24 mt-32 sm:mt-40 md:mt-48 lg:mt-56">
        <h1
          className="font-cinzel text-[85px] xs:text-[94px] sm:text-[120px] md:text-[145px] lg:text-[160px] xl:text-[180px] font-normal 
    leading-[100%] tracking-[0%] text-center bg-gradient-to-r from-[#8B5A00] via-[#FFF200] via-[#FFED4E] via-[#FFF200] to-[#8B5A00] 
    bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] my-2 break-words text-gold-shadow"
        >
          ROELLI
        </h1>

        <h1
          className="font-cinzel text-[85px] xs:text-[94px] sm:text-[120px] md:text-[145px] lg:text-[160px] xl:text-[180px] font-normal 
    leading-[100%] tracking-[0%] text-center bg-gradient-to-r from-[#8B5A00] via-[#FFF200] via-[#FFED4E] via-[#FFF200] to-[#8B5A00] 
    bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] my-2 break-words"
        >
          WORLD
        </h1>

        <h3 className="text-[#13D0EF] font-semibold text-[22px] xs:text-[24px] sm:text-[32px] md:text-[42px] lg:text-[38px] xl:text-[42px] leading-[100%] tracking-[0%] my-2">
          PLAY. EARN. EVOLVE.
        </h3>
      </div>

      {/* Button Overlay */}
      <div className="overlay-button w-full flex justify-center px-4 box-border mb-24 sm:mb-32 md:mb-40 lg:mb-44">
        <button className="px-4 py-3 xs:px-5 xs:py-3.5 sm:px-14 sm:py-6 md:px-16 md:py-8 lg:px-16 lg:py-8 xl:px-20 xl:py-10 bg-[#021F61] text-[#13D0EF] cursor-pointer font-inter text-[16px] sm:text-[24px] md:text-[30px] lg:text-[26px] xl:text-[32px] leading-[100%] tracking-[0%] border-2 border-white rounded-[15px] shadow-[0_0_10px_rgba(255,255,255,0.5),0_0_20px_rgba(255,255,255,0.3),0_0_30px_rgba(255,255,255,0.2),inset_0_0_10px_rgba(255,255,255,0.1)] transition-[box-shadow,transform] duration-300 ease-[ease] hover:shadow-[0_0_15px_rgba(255,255,255,0.8),0_0_30px_rgba(255,255,255,0.5),0_0_45px_rgba(255,255,255,0.3),inset_0_0_15px_rgba(255,255,255,0.2)] hover:-translate-y-[2px] whitespace-nowrap">
          ENTER THE WORLD
        </button>
      </div>
    </div>
  );
}
