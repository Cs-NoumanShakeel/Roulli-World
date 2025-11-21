import React from "react";

export default function Community() {
  return (
    <div className="relative h-[60vh] sm:h-[160vh] bg-black">
      <div className="h-[50vh] sm:h-[150vh] flex justify-center align-center">
        <div
          className="flex  "
          style={{
            backgroundImage: `url('/sun.webp')`,
            height: "100%",
            width: "100%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <div className="">
            <h1
              className=" 
            font-inter font-semibold text-center
            text-[1.9rem] xs:text-[1.75rem] sm:text-[2rem] md:text-[3rem] lg:text-[4rem] xl:text-[5rem]
            leading-none text-[#F8FCA0]
            rounded-2xl
            m-0
            [text-shadow:_-0.1rem_-0.1rem_0_#146274,_0.1rem_-0.1rem_0_#146274,_-0.1rem_0.1rem_0_#146274,_0.1rem_0.1rem_0_#146274,_-0.1rem_0_0_#146274,_0.1rem_0_0_#146274,_0_-0.1rem_0_#146274,_0_0.1rem_0_#146274]
            md:[text-shadow:_-0.3rem_-0.3rem_0_#146274,_0.3rem_-0.3rem_0_#146274,_-0.3rem_0.3rem_0_#146274,_0.3rem_0.3rem_0_#146274,_-0.3rem_0_0_#146274,_0.3rem_0_0_#146274,_0_-0.3rem_0_#146274,_0_0.3rem_0_#146274]
          "
            >
              JOIN THE
            </h1>

            <h1
              className="
            font-inter font-semibold text-center
            text-[1.5rem] xs:text-[1.75rem] sm:text-[2rem] md:text-[3rem] lg:text-[4rem] xl:text-[5rem]
            leading-none text-[#F8FCA0]
            px-4 sm:px-6 lg:px-8
            py-1 sm:py-2
            rounded-2xl
            m-0
            [text-shadow:_-0.1rem_-0.1rem_0_#146274,_0.1rem_-0.1rem_0_#146274,_-0.1rem_0.1rem_0_#146274,_0.1rem_0.1rem_0_#146274,_-0.1rem_0_0_#146274,_0.1rem_0_0_#146274,_0_-0.1rem_0_#146274,_0_0.1rem_0_#146274]
            md:[text-shadow:_-0.3rem_-0.3rem_0_#146274,_0.3rem_-0.3rem_0_#146274,_-0.3rem_0.3rem_0_#146274,_0.3rem_0.3rem_0_#146274,_-0.3rem_0_0_#146274,_0.3rem_0_0_#146274,_0_-0.3rem_0_#146274,_0_0.3rem_0_#146274]
          "
            >
              COMMUNITY
            </h1>
            <p
              className="
            font-inter font-light text-center
            text-[0.65rem] xs:text-[0.75rem] sm:text-[0.875rem] md:text-[1rem] lg:text-[1.25rem] xl:text-[1.5rem]
            leading-tight text-[#6EECE9]
            tracking-[0.1rem] xs:tracking-[0.15rem] lg:tracking-[0.25rem]
            px-4 sm:px-6 lg:px-8
            py-1 sm:py-2
            mt-2 sm:mt-3 lg:mt-4
            rounded-xl
            w-[100%] 
          "
            >
              BE PART OF THE EVOLUTION
            </p>
          </div>

          <button
            className="
               font-inter font-thin text-[#6EECE9] bg-[#022D3E]
              text-[0.7rem] xs:text-[0.85rem] sm:text-[1rem] md:text-[1.15rem] lg:text-[1.35rem] xl:text-[1.5rem]
              px-6 xs:px-8 sm:px-10 lg:px-12 xl:px-14
              py-2 xs:py-2.5 sm:py-3 lg:py-3.5 xl:py-4
              rounded-[1rem] lg:rounded-[1.5rem]
              border-[0.15rem] lg:border-[0.2rem] border-[#1BC6D2]
              cursor-pointer
              tracking-[0.1rem]
              relative
              mt-4 xs:mt-5 sm:mt-6 lg:mt-7 xl:mt-8 xl:top-12 lg:top-4
              transition-transform duration-200 ease-in-out
              hover:-translate-y-[0.1875rem]
              uppercase
            "
            style={{
              boxShadow:
                "0 0.5rem 2.5rem 0 rgba(0, 0, 0, 0.8), 0 0 1.5rem rgba(27, 198, 210, 0.3)",
            }}
          >
            Discord
          </button>
          <div
            className="sm:bg-transparent 
              relative right-2 xl:right-5 lg:right-5 md:right-5 xs:right-2 flex flex-row flex-nowrap items-center justify-center
              gap-3 xs:gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16
              mt-4 xs:mt-2 sm:mt-6 lg:mt-8 xl:mt-16
              mb-0
              w-full
            "
          >
            {/* Discord Button */}
            <button
              className="
                transition-all duration-250 ease-in-out
                cursor-pointer
                hover:scale-110
              "
            >
              <img
                src="/discord.webp"
                alt="Discord"
                className="w-[6rem] h-[4.5rem] xs:w-[5rem] xs:h-[4rem] sm:w-[7.5rem] sm:h-[5.5rem] md:w-[9.2rem] md:h-[7rem] lg:w-[12rem] lg:h-[9rem] xl:w-[14rem] xl:h-[10rem]"
              />
            </button>

            {/* Twitter Button */}
            <button
              className="
                transition-all duration-250 ease-in-out
                cursor-pointer
                hover:scale-110
              "
            >
              <img
                src="/twitter.webp"
                alt="Twitter"
                className="w-[6rem] h-[4.5rem] xs:w-[5rem] xs:h-[4rem] sm:w-[7.5rem] sm:h-[5.5rem] md:w-[9.2rem] md:h-[7rem] lg:w-[12rem] lg:h-[9rem] xl:w-[14rem] xl:h-[10rem]"
              />
            </button>

            {/* YouTube Button */}
            <button
              className="
                transition-all duration-250 ease-in-out
                cursor-pointer
                hover:scale-110
              "
            >
              <img
                src="/youtube.webp"
                alt="YouTube"
                className="w-[5rem] h-[4.2rem] xs:w-[4rem] xs:h-[3.7rem] sm:w-[6.5rem] sm:h-[5.3rem] md:w-[7.2rem] md:h-[6.3rem] lg:w-[9.3rem] lg:h-[8.2rem] xl:w-[11.5rem] xl:h-[9rem]"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-black"></div>
      <div
        className="absolute inset-x-0 bottom-0 mx-auto h-1 w-[40%]"
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,1) 35%, rgba(34,211,238,0) 100%)",
        }}
      />
    </div>
  );
}
