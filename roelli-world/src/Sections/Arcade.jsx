export default function Arcade() {
  return (
    <div className="h-[60vh] sm:h-[160vh] bg-[#000223]">
      {/* activate it on smaller devices */}
      <div className="block sm:hidden text-center px-2 pt-4">
        <h2 className="font-bold text-[14px] sm:text-lg md:text-2xl lg:text-3xl bg-gradient-to-t from-[#50EAFB] to-[#6FE0EF] text-transparent bg-clip-text">
          ENTER THE ARCADE
        </h2>

        <p className="font-bold text-[14px] sm:text-lg md:text-2xl lg:text-3xl bg-gradient-to-t from-[#50EAFB] to-[#6FE0EF] text-transparent bg-clip-text">
          OF ROELLI
        </p>

        <p className="text-gray-200 text-[10px] sm:text-xs md:text-base">
          6 Puzzle Adventure · 1 Epic Runner Game
        </p>
      </div>

      <div className="h-[50vh] sm:h-[150vh] flex justify-center align-center">
        <div
          style={{
            backgroundImage: `url('/game-row1.webp')`,
            height: "100%",
            width: "25%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
        ></div>
        <div
          className="flex flex-col justify-center"
          style={{
            width: "50%",
          }}
        >
          <div
            className="flex"
            style={{
              backgroundImage: `url('/top-view.webp')`,
              height: "40%",
              width: "80%",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              textAlign: "center",
              margin: "0 auto",
            }}
          >
            {/* activate it on larger devices */}
            <div className="hidden sm:block text-center px-2">
              <h2
                className="font-bold text-[14px] sm:text-lg md:text-2xl lg:text-3xl bg-gradient-to-t from-[#50EAFB] to-[#6FE0EF] text-transparent bg-clip-text"
                style={{ wordSpacing: 10, letterSpacing: 8 }}
              >
                ENTER THE ARCADE
              </h2>

              <p
                style={{ wordSpacing: 6, letterSpacing: 8 }}
                className="font-bold text-[14px] sm:text-lg md:text-2xl lg:text-3xl bg-gradient-to-t from-[#50EAFB] to-[#6FE0EF] text-transparent bg-clip-text"
              >
                OF ROELLI
              </p>

              <p
                className="text-gray-200 text-[10px] sm:text-xs md:text-base"
                style={{ wordSpacing: 4, letterSpacing: 4 }}
              >
                6 Puzzle Adventure · 1 Epic Runner Game
              </p>
            </div>

            <div className="flex flex-col justify-center items-center mt-4 sm:mt-20">
              <img
                src="/wonderer.webp"
                width="50px"
                height="50px"
                style={{ display: "inline-block" }}
                alt="Wanderer"
              />

              <button
                className="relative font-bold uppercase tracking-widest text-xs sm:text-sm md:text-base px-5 py-2 border border-cyan-300 rounded-full hover:scale-105 transition shadow-[0_0_20px_rgba(0,198,249,0.4)]"
                style={{
                  background: "#001848",
                  color: "#FFFFFF",
                  boxShadow:
                    "inset 2px 4px 6px rgba(93,153,205,0.3), 0px 0px 15px rgba(14,170,227,0.5)",
                }}
              >
                PLAY RUNNER
              </button>
            </div>
          </div>
          <div
            style={{
              marginTop: "-20px",
              backgroundImage: `url('/bottom-view.webp')`,
              height: "40%",
              width: "100%",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              textAlign: "center",
            }}
          ></div>
        </div>
        <div
          style={{
            backgroundImage: `url('/game-row2.webp')`,
            height: "100%",
            width: "25%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
        ></div>
      </div>
    </div>
  );
}
