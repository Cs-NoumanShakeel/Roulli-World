export default function Section7() {
  return (
    <div 
      className="
        section7 relative w-full overflow-hidden
        min-h-[55vh] 
        lg:min-h-[95vh]
        lg:landscape:min-h-[100vh]
        xl:landscape:min-h-[110vh]
        lg:portrait:min-h-[55vh]
        md:portrait:min-h-[50vh]
        md:landscape:min-h-[70vh]
        xs:min-h-[53vh] 
        sm:min-h-[70vh]
        flex flex-col items-center justify-center
        bg-cover bg-center bg-no-repeat
        p-4 sm:p-6 lg:p-8
      "
      style={{
        backgroundImage: `radial-gradient(circle at center, rgba(67, 181, 255, 0.72) -10%, transparent 25%), url('/sun.png')`
      }}
    >
      {/* Content Container */}
      <div 
        className="
          absolute flex flex-col items-center justify-center
          w-full max-w-[90%]
          top-[28%] xs:top-[24%] sm:top-[22%] md:top-[16%] lg:top-[18%] xl:top-[18%]
          pt-2 sm:pt-4 lg:pt-6
        "
      >
        {/* Headings */}
        <h1 
          className="
            font-inter font-semibold text-center
            text-[1.9rem] xs:text-[1.75rem] sm:text-[2rem] md:text-[3rem] lg:text-[4rem] xl:text-[5rem]
            leading-none text-[#F8FCA0]
            px-4 sm:px-6 lg:px-8
            py-1 sm:py-2
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

        {/* Subtext */}
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
            w-[80%] xs:w-[70%] sm:w-auto
          "
        >
          BE PART OF THE EVOLUTION
        </p>

        {/* Discord Parent Container */}
        <div className="flex flex-col items-center justify-center w-full">
          {/* Main Discord Button */}
          <button 
            className="
               font-inter font-thin text-[#6EECE9] bg-[#022D3E]
              text-[0.7rem] xs:text-[0.85rem] sm:text-[1rem] md:text-[1.15rem] lg:text-[1.35rem] xl:text-[1.5rem]
              px-6 xs:px-8 sm:px-10 lg:px-12 xl:px-14
              py-2 xs:py-2.5 sm:py-3 lg:py-3.5 xl:py-4
              rounded-[1.5rem] lg:rounded-[2rem]
              border-[0.15rem] lg:border-[0.2rem] border-[#1BC6D2]
              cursor-pointer
              tracking-[0.1rem]
              relative
              mt-4 xs:mt-5 sm:mt-6 lg:mt-7 xl:mt-8
              transition-transform duration-200 ease-in-out
              hover:-translate-y-[0.1875rem]
              uppercase
            "
            style={{
              boxShadow: '0 0.5rem 2.5rem 0 rgba(0, 0, 0, 0.8), 0 0 1.5rem rgba(27, 198, 210, 0.3)'
            }}
          >
            Discord
          </button>

          {/* Banner Row - Social Media Buttons */}
          <div 
            className="
              relative right-3 flex flex-row flex-nowrap items-center justify-center
              gap-3 xs:gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16
              mt-4 xs:mt-2 sm:mt-6 lg:mt-8 xl:mt-16
              mb-0
              px-2 sm:px-4 lg:px-6
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
                src="/discord.png" 
                alt="Discord"
                className="w-[4.5rem] h-[4.5rem] xs:w-[5rem] xs:h-[4rem] sm:w-[7.5rem] sm:h-[5.5rem] md:w-[8rem] md:h-[6rem] lg:w-[10rem] lg:h-[8rem] xl:w-[12rem] xl:h-[9rem]"
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
                src="/twitter.png" 
                alt="Twitter"
                className="w-[4.5rem] h-[4.5rem] xs:w-[5rem] xs:h-[4rem] sm:w-[7.5rem] sm:h-[5.5rem] md:w-[8rem] md:h-[6rem] lg:w-[10rem] lg:h-[8rem] xl:w-[12rem] xl:h-[9rem]"
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
                src="/youtube.png" 
                alt="YouTube"
                className="w-[3.9rem] h-[4.2rem] xs:w-[4rem] xs:h-[3.7rem] sm:w-[6.5rem] sm:h-[5.3rem] md:w-[6.5rem] md:h-[5.5rem] lg:w-[8rem] lg:h-[7.1rem] xl:w-[10rem] xl:h-[8rem]"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}