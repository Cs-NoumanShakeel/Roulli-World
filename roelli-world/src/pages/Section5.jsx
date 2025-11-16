export default function Page5() {
  return (
    <>
      <style>{`
        .section5-bg {
          background-image: linear-gradient(to bottom, #010012 30%, #010535 70%, #00000061 90%, rgba(255,255,255,0.05) 100%), url("/Disney.png");
          background-position: center bottom;
        }
        @media (max-width: 1024px) {
          .section5-bg {
            background-position: center 80%;
          
          }
        }
        @media (max-width: 768px) {
          .section5-bg {
            background-position: center bottom;
              min-height: 80vh;
            padding-top: 40px;
          }
              .section-logo{
                margin-top: 135px !important;
            }

         
        }
        @media (max-width: 480px) {
          .section5-bg {
            background-image: linear-gradient(to bottom, #010012 0%, #010535 30%, rgba(0, 0, 0, 0.36) 100%, rgba(0, 0, 0, 0.3) 100%), url("/Disney.png");
            background-position: 52% 70%;
            min-height: 70vh;
            padding-top: 120px;
          }
          .section5-bg h1 {
            font-size: 1.2rem !important;
          }
          .section5-bg p {
            display: none !important;
          }
          .section5-bg img {
            height: 32px !important;
          }
          .section5-bg #ulker,
          .section5-bg #getir {
            width: 72px !important;
          }
          .section5-bg #mavi {
            width: 80px !important;
          }
          .section5-bg #mavi-bg {
            width: 64px !important;
          }
          .section5-bg #LC-color,
          .section5-bg #Mg-color {
            font-size: 1.2rem !important;
          }
          .section5-bg .section-logo img {
            height: 55px !important;
          }
            .section-logo{
                margin-top: 75px !important;
            }
        }
        @media (max-width: 360px) {
          .section5-bg {
            background-position: center bottom;
          }
          .section5-bg h1 {
            font-size: 1rem !important;
          }
          .section5-bg img {
            height: 28px !important;
          }
          .section5-bg #ulker,
          .section5-bg #getir {
            width: 63px !important;
          }
          .section5-bg #mavi {
            width: 70px !important;
          }
          .section5-bg #mavi-bg {
            width: 56px !important;
          }
          .section5-bg #LC-color,
          .section5-bg #Mg-color {
            font-size: 1rem !important;
          }
          .section5-bg .section-logo img {
            height: 30px !important;
          }
        }
      `}</style>
      <div className="section5-bg w-full max-w-[100vw] min-h-[90vh] 
                      flex flex-col items-center justify-start 
                      pt-10 pb-[60px] text-center text-white
                      bg-cover bg-no-repeat
                      lg:min-h-[55vh] lg:pt-10
                      max-md:min-h-auto max-md:pb-[50px]
                      max-[480px]:min-h-[60vh] max-[480px]:pt-[100px] max-[480px]:pb-20">
      
      <h1 className="text-[2.3rem] font-medium m-0 font-['Inter',sans-serif] leading-[120%] tracking-[0]
                      bg-gradient-to-r from-[#20D4F2] to-[#00C6F9] bg-clip-text text-transparent
                      drop-shadow-[0px_-2px_25px_#0B3765]
                      lg:text-[3rem]
                      max-md:text-[1.8rem]
                      max-[480px]:text-[1.2rem]
                      max-[360px]:text-[1rem]">
        EARN REAL-WORLD
      </h1>
      
      <h1 className="text-[2.3rem] font-medium m-0 font-['Inter',sans-serif] leading-[120%] tracking-[0]
                      bg-gradient-to-r from-[#20D4F2] to-[#00C6F9] bg-clip-text text-transparent
                      drop-shadow-[0px_-2px_25px_#0B3765]
                      lg:text-[3rem]
                      max-md:text-[1.8rem]
                      max-[480px]:text-[1.2rem]
                      max-[360px]:text-[1rem]">
        REWARDS THROUGH PLAY
      </h1>

      <p className="mt-[10px] text-[2rem] font-normal font-['Inter',sans-serif]
                    bg-gradient-to-r from-[#20D4F2] to-[#00C6F9] bg-clip-text text-transparent
                    leading-[1.2]
                    lg:text-[1.9rem] lg:block
                    max-md:text-[1.4rem] max-md:hidden
                    max-[480px]:hidden
                    max-[360px]:hidden">
        Partnered with global leading brands.
      </p>

      <div className="w-full mt-10 flex flex-col gap-5 items-center
                      lg:gap-[18px]
                      max-[480px]:mt-[30px] max-[480px]:gap-[25px]">
        
        <div className="w-[85%] max-w-[1200px] flex justify-between items-center ml-[10px]
                        max-[480px]:w-[90%] max-[480px]:gap-[15px] max-[480px]:ml-0">
          <img src="/starbucks.png" alt="Starbucks Logo" className="h-[60px] object-contain
                                                                     lg:h-[70px]
                                                                     max-md:h-[50px]
                                                                     max-[480px]:h-[32px]
                                                                     max-[360px]:h-[28px]" />
          <h1 id="LC-color" className="text-[1.8rem] font-bold transition-all duration-300
                                        text-[#00d4ff] ml-[30px]
                                        hover:opacity-80
                                        lg:text-[1.8rem]
                                        max-md:text-[1.4rem]
                                        max-[480px]:text-[1.2rem] max-[480px]:ml-0
                                        max-[360px]:text-[1rem]">
            LC WAIKIKI
          </h1>
          <h1 id="Mg-color" className="text-[1.8rem] font-bold transition-all duration-300
                                         text-[#F1950E] !text-[#F1950E]
                                         hover:opacity-80
                                         lg:text-[1.8rem]
                                         max-md:text-[1.4rem]
                                         max-[480px]:text-[1.2rem]
                                         max-[360px]:text-[1rem]">
            MIGROS
          </h1>
        </div>

        <div className="w-[85%] max-w-[1200px] flex justify-between items-center
                        max-[480px]:w-[90%] max-[480px]:gap-[15px]">
          <img src="/ulker.png" alt="ulker Logo" id="ulker" className="h-[60px] w-[110px] object-contain
                                                                        lg:h-[70px]
                                                                        max-md:h-[50px]
                                                                        max-[480px]:h-[32px] max-[480px]:w-[72px]
                                                                        max-[360px]:h-[28px] max-[360px]:w-[63px]" />
          <img src="/getir.png" alt="getir Logo" id="getir" className="h-[60px] w-[110px] object-contain
                                                                       lg:h-[70px]
                                                                       max-md:h-[50px]
                                                                       max-[480px]:h-[32px] max-[480px]:w-[72px]
                                                                       max-[360px]:h-[28px] max-[360px]:w-[63px]" />
          <img src="/disney-logo.png" alt="disney Logo" className="h-[60px] object-contain
                                                                   lg:h-[70px]
                                                                   max-md:h-[50px]
                                                                   max-[480px]:h-[32px]
                                                                   max-[360px]:h-[28px]" />
        </div>

        <div className="w-[85%] max-w-[1200px] flex justify-between items-center
                        max-[480px]:w-[90%] max-[480px]:gap-[15px]">
          <img src="/mavi.png" alt="mavi Logo" id="mavi" className="h-[60px] w-[130px] object-contain -ml-[15px]
                                                                     lg:h-[70px]
                                                                     max-md:h-[50px]
                                                                     max-[480px]:h-[32px] max-[480px]:w-[80px]
                                                                     max-[360px]:h-[28px] max-[360px]:w-[70px]" />
          <img src="/mavi-bg.png" alt="mavi-bg Logo" id="mavi-bg" className="h-[60px] w-[100px] object-contain
                                                                              lg:h-[70px]
                                                                              max-md:h-[50px]
                                                                              max-[480px]:h-[32px] max-[480px]:w-[64px]
                                                                              max-[360px]:h-[28px] max-[360px]:w-[56px]" />
          <img src="/pinar.png" alt="pinar Logo" className="h-[60px] object-contain
                                                              lg:h-[70px]
                                                              max-md:h-[50px]
                                                              max-[480px]:h-[32px]
                                                              max-[360px]:h-[28px]" />
        </div>

        <div className="section-logo mt-[45px] flex flex-col items-center gap-[10px]
                        max-[480px]:mt-[55px]">
          <img src="/title2.png" alt="title2 Logo" className="h-[60px] object-contain
                                                                 brightness-[1.5] contrast-[1.2]
                                                                 transition-[filter] duration-300
                                                                 hover:brightness-[2] hover:contrast-[1.3]
                                                                 lg:h-[65px]
                                                                 max-md:h-[40px]
                                                                 max-[480px]:h-[35px]
                                                                 max-[360px]:h-[30px]" />
          <img src="/title21.png" alt="title21 Logo" className="h-[60px] object-contain
                                                                  brightness-[1.5] contrast-[1.2]
                                                                  transition-[filter] duration-300
                                                                  hover:brightness-[2] hover:contrast-[1.3]
                                                                  lg:h-[65px]
                                                                  max-md:h-[40px]
                                                                  max-[480px]:h-[35px]
                                                                  max-[360px]:h-[30px]" />
        </div>
      </div>
    </div>
    </>
  );
}