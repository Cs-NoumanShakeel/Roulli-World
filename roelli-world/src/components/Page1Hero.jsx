import "../css/app.css";

export default function Page1Hero() {
  return (
    <div className="relative w-full max-w-full overflow-hidden page1-hero h-[120vh] bg-[url('/world.png')] bg-cover bg-center bg-no-repeat text-white flex flex-col items-center justify-center pt-[450px] px-4 py-8 box-border">

      {/* Text Overlay */}
      <div className="overlay-text text-center w-full px-4 box-border mb-[6rem] -translate-y-[50px]">
        <h1 className=" font-cinzel text-[180px] font-normal leading-[100%] tracking-[0%] text-center bg-gradient-to-r from-[#8B5A00] from-0% via-[#FFF200] via-25% via-[#FFED4E] via-50% via-[#FFF200] via-75% to-[#8B5A00] to-100% bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] my-2 break-words overflow-wrap-break-word">
          ROELLI
        </h1>
        <h1 className=" font-cinzel text-[180px] font-normal leading-[100%] tracking-[0%] text-center bg-gradient-to-r from-[#8B5A00] from-0% via-[#FFF200] via-25% via-[#FFED4E] via-50% via-[#FFF200] via-75% to-[#8B5A00] to-100% bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] my-2 break-words overflow-wrap-break-word">
          WORLD
        </h1>
        <h3 className="text-[#13D0EF] font-semibold text-[30px] leading-[100%] tracking-[0%] my-2 break-words">
          PLAY. EARN. EVOLVE.
        </h3>
      </div>

      {/* Button Overlay */}
      <div className="overlay-button w-full flex justify-center px-4 box-border">
        <button className="px-[2.2rem] py-[1.2rem] bg-[#021F61] text-[#13D0EF] cursor-pointer mb-[18rem] font-inter text-[16px] leading-[100%] tracking-[0%] border-2 border-white rounded-[15px] shadow-[0_0_10px_rgba(255,255,255,0.5),0_0_20px_rgba(255,255,255,0.3),0_0_30px_rgba(255,255,255,0.2),inset_0_0_10px_rgba(255,255,255,0.1)] transition-[box-shadow,transform] duration-300 ease-[ease] hover:shadow-[0_0_15px_rgba(255,255,255,0.8),0_0_30px_rgba(255,255,255,0.5),0_0_45px_rgba(255,255,255,0.3),inset_0_0_15px_rgba(255,255,255,0.2)] hover:-translate-y-[2px] whitespace-nowrap">
          ENTER THE WORLD
        </button>
      </div>

      {/* Responsive exact overrides */}
      <style jsx>{`
        /* Desktop / Large screens */
        @media (max-width: 1024px) {
          .page1-hero { 
            padding-top: 350px; 
            padding-left: 1rem;
            padding-right: 1rem;
            height: 90vh; 
          }
          .overlay-text h1 { font-size: 230px; }
          .overlay-text h3 { font-size: 50px; }
          .overlay-button button { 
            padding: 2rem 4rem; 
            font-size: 32px; 
            margin-bottom: 10rem; 
          }
        }

        /* Tablet / Small screens */
        @media (max-width: 768px) {
          .page1-hero { 
            padding-top: 250px; 
            height: 90vh; 
          }
          .overlay-text { 
            margin-bottom: 4rem; 
          }
          .overlay-text h1 { font-size: 145px; }
          .overlay-text h3 { font-size: 42px; }
          .overlay-button button { 
            padding: 1.5rem 3.5rem; 
            font-size: 30px; 
            margin-bottom: 4rem; 
          }
        }

        /* Mobile 480px */
        @media (max-width: 480px) {
          .page1-hero { 
            padding-top: 200px; 
            height: 70vh; 
            background-size: 1180px 700px; 
            background-repeat: no-repeat; 
          }
          .overlay-text { 
            margin-bottom: 3rem; 
            margin-top: 250px; 
            transform: translateY(-70px);
          }
          .overlay-text h1 { font-size: 94px; }
          .overlay-text h3 { font-size: 24px; }
          .overlay-button button { 
            padding: 0.8rem 1.2rem; 
            font-size: 16px; 
            margin-bottom: 15rem; 
          }
        }
      
        /* Very small 380px */
        @media (max-width: 376px) {
          .page1-hero { 
            padding-top: 150px; 
            height: 80vh; 
            background-size: 1020px 620px; 
            background-repeat: no-repeat; 
          }
          .overlay-text { 
            transform: translateY(-40px);
          }
          .overlay-text h1 { font-size: 85px; }
          .overlay-text h3 { font-size: 22px; }
          .overlay-button button { 
            padding: 0.7rem 1rem; 
            font-size: 16px; 
            margin-bottom: 15rem; 
          }
        }
      `}</style>
    </div>
  );
}