export default function Hero() {
  return (
    <div
      className="relative w-full h-[52vh]  xl:h-[130vh] lg:h-[82vh]  md:h-[72vh] sm:h-[70vh] xs:h-[45vh] flex flex-col items-center justify-center overflow-hidden bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: "url('/world.png')",
      }}
    >
      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-12 w-full h-full text-center pb-5">
        {/* Logo Images */}
        <div className="flex flex-col items-center justify-center mb-4 sm:mb-6 md:mb-8">
          <img
            src="/main-logo1.png"
            alt="ROELLI"
            className=" ml-5 xs:relative left-1 xs:mr-5 w-[30vh] xl:w-[76vh] lg:w-[56vh] md:w-[46vh] sm:w-[40vh] xs:w-[20vh] h-auto object-cover text-center"
          />
          <img
            src="/main-logo2.png"
            alt="WORLD"
            className=" ml-5 xs:relative left-1 xs:mr-5 w-[30vh] xl:w-[76vh]  lg:w-[56vh]  md:w-[46vh] sm:w-[40vh] xs:w-[20vh] h-auto object-contain -mt-1 sm:-mt-2 md:-mt-3"
          />
        </div>

        {/* Tagline */}
        <p
         className="
  text-center font-semibold tracking-[0.15em]
  relative
  ml-2
  bottom-2
  mb-6

  sm:ml-5 sm:mb-10

  md:ml-7 md:mb-14

  lg:ml-9 lg:mb-6 lg:bottom-7

  xl:ml-10 xl:bottom-6
"

          style={{
           fontSize: "clamp(0.5rem, 2.5vw, 2rem)",

            background: "linear-gradient(90deg, #20D4F2 0%, #00C6F9 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            letterSpacing: "0.2em",
          }}
        >
          PLAY. EARN. EVOLVE.
        </p>

        {/* Enter Button */}
        <button
        className="
  relative 
  top-10
  sm:top-10
  md:top-8
  lg:top-20
  xl:top-32
  font-semibold uppercase tracking-widest
  transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,198,249,0.7)]
  active:scale-95
"

style={{
  fontSize: "clamp(0.35rem, 1.8vw, 0.95rem)",
  padding: "clamp(8px, 1.5vw, 12px) clamp(24px, 4.5vw, 42px)",
  border: "2px solid #00C6F9",
  background: "rgba(0, 20, 50, 0.6)",
  color: "#00C6F9",
  boxShadow: "0 0 20px rgba(0, 198, 249, 0.6), inset 0 0 15px rgba(0, 198, 249, 0.2)",
  letterSpacing: "0.2em",
  clipPath: "polygon(8% 0%, 92% 0%, 100% 20%, 100% 80%, 92% 100%, 8% 100%, 0% 80%, 0% 20%)",
}}
        >
          ENTER THE WORLD
        </button>
      </div>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-cyan-400/90" />
    </div>
  );
}
