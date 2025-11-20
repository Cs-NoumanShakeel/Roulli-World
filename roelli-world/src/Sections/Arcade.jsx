import React from "react";
import "../css/app.css";

export default function Arcade() {
  return (
    <section
      className=" arcade-main relative w-full h-full overflow-hidden flex items-center justify-center "
      style={{
        

        background: "linear-gradient(90deg, #001135 0%, #000a1f 50%, #000510 100%)",
      }}
    >
      {/* Parent container - flex row */}
      <div className="w-full max-w-[1800px] mx-auto px-4 py-12 flex flex-row items-center justify-center gap-8 lg:gap-12 xl:gap-16">
        
        {/* Left div - 25% width - gamerow1 */}
        <div className="
  relative 
  left-12
  sm:left-16
  md:left-24
  lg:left-28
  xl:left-20
  w-[25%] flex items-center justify-center
  
"
>
          <img
            src="/game-row1.png"
            alt="left game icons"
            className="w-[110px] max-w-[220px] lg:w-[210px] xl:w-[400px]   md:w-[180px] sm:w-[140px] h-auto object-contain"
            draggable="false"
          />
        </div>

        {/* Center div - parent with two children */}
        <div className="flex-1 max-w-[900px] relative flex flex-col items-center justify-center">
          
          {/* First child - top-view as background with overlay text */}
          <div
            className="w-[220px] lg:w-[580px] md:w-[480px] sm:w-[280px]  xl:w-[900px] h-[400px] lg:h-[480px] xl:h-[550px] bg-contain bg-center bg-no-repeat relative flex items-start justify-center pt-8"
            style={{
              backgroundImage: "url('/top-view.png')",
           /*   opacity: 0.9,
              boxShadow: "0px 2px 1.6px 1px #07376800",
              backdropFilter: "blur(30px)", */
            }}
          >
            {/* Overlay text on top */}
            <div className="text-center px-4 z-10 " >
              <h2
                className="uppercase tracking-[0.3em] font-bold text-base lg:text-lg xl:text-4xl mb-2 mt-3"
                style={{
                  fontFamily: "Inter, sans-serif",
                  background: "linear-gradient(360deg, #50EAFB 0%, #6FE0EF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                ENTER THE ARCADE
              </h2>
              <p 
                className=" font-bold text-base lg:text-lg xl:text-4xl  mb-2"
                style={{
                  fontFamily: "Inter, sans-serif",
                  background: "linear-gradient(360deg, #50EAFB 0%, #6FE0EF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                OF ROELLI
              </p>
              <p className="text-white text-sm lg:text-base xl:text-2xl">
                6 Puzzle Adventure · 1 Epic Runner Game
              </p>
            </div>
          </div>

          {/* Button at junction point */}
          <div className="absolute left-1/2 top-[50%] transform -translate-x-1/2 -translate-y-1/2 z-30">
            {/* Wanderer PNG at top center of button - hidden below 480px */}
            <img
              src="/wonderer.png"
              alt="wanderer"
              className="hidden sm:block min-[480px]:block absolute left-1/2 -top-14 xl:-top-8 lg:-top-6 md:-top-10 sm:-top-6 transform -translate-x-1/2 w-8 sm:w-10 md:w-12 h-auto object-contain z-40"
              draggable="false"
            />
            
            <button
             className="
  relative
  font-bold uppercase tracking-widest
  transition-all duration-300
  hover:scale-105 hover:shadow-[0_0_30px_rgba(0,198,249,0.8)]
  whitespace-nowrap

  top-6
  md:top-6
  lg:top-9
  xl:top-7
"

              style={{
                fontSize: "clamp(0.4rem, 1vw, 1.1rem)",
                padding: "clamp(4px, 1vw, 12px) clamp(12px, 2vw, 38px)",
                border: "clamp(1.5px, 0.3vw, 3px) solid #C6FFFF",
                borderRadius: "64px",
                background: "#001848",
                color: "#FFFFFF",
                boxShadow: "5px 9px 10px 0px #5D99CD6B inset, 0px 0px 25.8px 0px #0EAAE399",
              }}
            >
              PLAY RUNNER
            </button>
          </div>

          {/* Second child - bottom-view as background, connected with edges */}
          <div
            className=" w-[230px] lg:w-[680px] xl:w-[1000px] md:w-[580px] sm:w-[380px] xs:w-[200px]  h-[400px] lg:h-[480px] xl:h-[650px] bg-contain bg-center bg-no-repeat mt-[-280px] sm:mt-[-230px] md:mt-[-110px] lg:mt-[-140px] xl:mt-[-135px] overflow-hidden"
            style={{
              backgroundImage: "url('/bottom-view.png')",
            /*  opacity: 0.8,
              boxShadow: "5px 5px 5px 0px #00000040",
              backdropFilter: "blur(1.5px)", */
            }}
          />
        </div>

        {/* Right div - 25% width - gamerow2 */}
        <div className="
  relative 
  right-12
  sm:right-16
  
  md:right-24
  lg:right-28
  xl:right-30
  w-[25%] flex items-center justify-center
">
          <img
            src="/game-row2.png"
            alt="right game icons"
            className=" z-50 w-[110px] max-w-[220px] lg:w-[210px] xl:w-[520px] md:w-[180px]  sm:w-[140px]   h-auto object-contain"
            draggable="false"
          />
        </div>
      </div>
        <div className="absolute inset-x-0 bottom-0 h-1 bg-cyan-400/90" />
    </section>
  );
}