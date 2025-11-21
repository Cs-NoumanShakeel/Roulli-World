import "./brand.css";

export default function Brand() {
  return (
    <>
      <div
        className=" relative section5-bg w-full max-w-[100vw] min-h-[90vh] 
                      flex flex-col items-center justify-start 
                      pt-10 pb-[60px] text-center text-white
                      bg-cover bg-no-repeat
                      lg:min-h-[55vh] lg:pt-10
                      max-md:min-h-auto max-md:pb-[50px]
                      max-[480px]:min-h-[60vh] max-[480px]:pt-[100px] max-[480px]:pb-20"
      >
        <h1
          className="text-[2.3rem] font-medium m-0 font-['Inter',sans-serif]
                      leading-[120%] tracking-[0]
                      bg-gradient-to-r from-[#20D4F2] to-[#00C6F9] bg-clip-text text-transparent
                      drop-shadow-[0px_-2px_25px_#0B3765]
                      lg:text-[3rem]
                      md:text-[1.5rem]

                      max-[768px]:text-[1.7rem]     /* FIX ADDED */
                      max-[480px]:text-[1.2rem]
                      max-[360px]:text-[1rem]"
        >
          EARN REAL-WORLD
        </h1>

        <h1
          className="text-[2.3rem] font-medium m-0 font-['Inter',sans-serif]
                      leading-[120%] tracking-[0]
                      bg-gradient-to-r from-[#20D4F2] to-[#00C6F9] bg-clip-text text-transparent
                      drop-shadow-[0px_-2px_25px_#0B3765]
                      lg:text-[3rem]
                      md:text-[1.5rem]

                      max-[768px]:text-[1.7rem]     /* FIX ADDED */
                      max-[480px]:text-[1.2rem]
                      max-[360px]:text-[1rem]"
        >
          REWARDS THROUGH PLAY
        </h1>

        {/* ----------------------- PARAGRAPH ----------------------- */}
        <p
          className="mt-[10px] text-[2rem] font-normal font-['Inter',sans-serif]
                    bg-gradient-to-r from-[#20D4F2] to-[#00C6F9] bg-clip-text text-transparent
                    leading-[1.2]
                    lg:text-[1.9rem] lg:block
                    md:text-[1.5rem]

                    max-[768px]:text-[1.3rem]     /* FIX ADDED */
                    max-[480px]:hidden
                    max-[360px]:hidden"
        >
          Partnered with global leading brands.
        </p>

        {/* ----------------------- LOGOS ----------------------- */}
        <div
          className="w-full mt-10 flex flex-col gap-5 items-center
                      lg:gap-[18px]
                      max-[480px]:mt-[30px] max-[480px]:gap-[25px]"
        >
          {/* Starbucks Row */}
          <div
            className=" starbucks-row w-[85%] max-w-[1200px] flex justify-between items-center
                        max-[480px]:w-[90%]"
          >
            <img
              src="/starbucks.webp"
              className="starbucks-logo h-[46px] object-contain lg:h-[66px] max-md:h-[46px] max-[480px]:h-[28px] max-[360px]:h-[24px]"
            />
            <h1
              id="LC-color"
              className="text-[1.8rem] font-bold text-[#00d4ff]
                                        lg:text-[1.8rem]
                                        max-md:text-[1.4rem]
                                        max-[480px]:text-[1.2rem]
                                        max-[360px]:text-[1rem]"
            >
              LC WAIKIKI
            </h1>
            <h1
              id="Mg-color"
              className="text-[1.8rem] font-bold text-[#F1950E]
                                         lg:text-[1.8rem]
                                         max-md:text-[1.4rem]
                                         max-[480px]:text-[1.2rem]
                                         max-[360px]:text-[1rem]"
            >
              MIGROS
            </h1>
          </div>

          {/* Ülker + Getir + Disney */}
          <div
            className="w-[85%] max-w-[1200px] flex justify-between items-center
                        max-[480px]:w-[90%]"
          >
            <img
              src="/ulker.webp"
              id="ulker"
              className="h-[60px] w-[110px] object-contain lg:h-[70px] max-md:h-[50px] max-[480px]:h-[32px] max-[480px]:w-[72px] max-[360px]:h-[28px] max-[360px]:w-[63px]"
            />
            <img
              src="/getir.webp"
              id="getir"
              className="h-[60px] w-[110px] object-contain lg:h-[70px] max-md:h-[50px] max-[480px]:h-[32px] max-[480px]:w-[72px] max-[360px]:h-[28px] max-[360px]:w-[63px]"
            />
            <img
              src="/disney-logo.webp"
              className="disney-logo h-[60px] object-contain lg:h-[70px] max-md:h-[50px] max-[480px]:h-[32px] max-[360px]:h-[28px]"
            />
          </div>

          {/* Mavi Row */}
          <div
            className="w-[85%] max-w-[1200px] flex justify-between items-center
                        max-[480px]:w-[90%]"
          >
            <div className="flex justify-start" style={{ width: "130px" }}>
              <img
                src="/mavi.webp"
                id="mavi"
                className="h-[60px] w-[130px] object-contain lg:h-[70px] max-md:h-[50px] max-[480px]:h-[32px] max-[480px]:w-[80px] max-[360px]:h-[28px] max-[360px]:w-[70px] relative right-5"
              />
            </div>
            <img
              src="/mavi-bg.webp"
              id="mavi-bg"
              className="h-[60px] w-[100px] object-contain lg:h-[70px] max-md:h-[50px] max-[480px]:h-[32px] max-[480px]:w-[64px] max-[360px]:h-[28px] max-[360px]:w-[56px] relative right-5"
            />
            <div className="flex justify-end" style={{ width: "110px" }}>
              <img
                src="/pinar.webp"
                className="pinar-logo h-[60px] object-contain lg:h-[70px] max-md:h-[50px] max-[480px]:h-[32px] max-[360px]:h-[28px]"
              />
            </div>
          </div>

          {/* TITLE2 Logos */}
          <div
            className="section-logo mt-[45px] flex flex-col items-center gap-[10px]
                        max-[480px]:mt-[55px]"
          >
            <img
              src="/title2.webp"
              className="h-[60px] object-contain brightness-[1.5] contrast-[1.2] transition duration-300 hover:brightness-[2] hover:contrast-[1.3] lg:h-[65px] max-md:h-[40px] max-[480px]:h-[35px] max-[360px]:h-[30px]"
            />
            <img
              src="/title21.webp"
              className="h-[60px] object-contain brightness-[1.5] contrast-[1.2] transition duration-300 hover:brightness-[2] hover:contrast-[1.3] lg:h-[65px] max-md:h-[40px] max-[480px]:h-[35px] max-[360px]:h-[30px]"
            />
          </div>
        </div>
        <div
          className="absolute inset-x-0 bottom-0 mx-auto h-1 w-[40%]"
          style={{
            background:
              "radial-gradient(circle, rgba(34,211,238,1) 35%, rgba(34,211,238,0) 100%)",
          }}
        />
      </div>
    </>
  );
}
