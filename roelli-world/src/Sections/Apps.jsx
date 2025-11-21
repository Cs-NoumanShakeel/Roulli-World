import "../css/app.css";
export default function Apps() {
  return (
    <section
      className="w-full relative"
      style={{
        background: "linear-gradient(90deg, #000000 0%, #040627 100%)",
      }}
      aria-labelledby="ad-heading"
    >
      <div className="max-w-screen-xl mx-auto px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:items-center overflow-visible">
          {/* LEFT IMAGE */}
          <div className="flex items-center justify-center">
            <img
              src="/advertisement.webp"
              alt="Roelli advertisement"
              className="ad-img artwork w-[min(860px,86vw)] xl:w-[min(1200px,92vw)] max-w-none h-auto object-contain"
              draggable="false"
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col items-start justify-center text-left px-2 md:px-6 lg:px-10">
            <h2
              id="ad-heading"
              className="md:text-[38px] sm:text-[32px] text-[28px] leading-tight font-extrabold uppercase"
              style={{
                fontFamily: "Inter, sans-serif",
                background: "linear-gradient(360deg, #20D4F2 0%, #00C6F9 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              ENTER THE <br className="hidden lg:inline" /> WORLD{" "}
              <span className="block">OF ROELLI</span>
            </h2>

            <p className="mt-6 text-gray-300 max-w-lg text-[15px] md:text-[16px] leading-relaxed mr-44">
              Make the heroes, earn rewards, <br /> and join the adventure
            </p>

            <div className="mt-8 flex flex-row items-center gap-3">
              {/* App Store */}
              <a
                href="#"
                className="inline-flex items-center justify-center px-2 py-2"
              >
                <img
                  src="/apple.webp"
                  alt="App Store"
                  className="h-14 md:h-16 lg:h-[72px] w-auto object-contain"
                />
              </a>

              {/* Google Play */}
              <a
                href="#"
                className="inline-flex items-center justify-center px-2 py-2"
              >
                <img
                  src="/google.webp"
                  alt="Google Play"
                  className="h-14 md:h-16 lg:h-[72px] w-auto object-contain"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="block md:hidden mt-6" aria-hidden="true" />
      </div>
      <div
        className="absolute inset-x-0 bottom-0 mx-auto h-1 w-[40%]"
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,1) 35%, rgba(34,211,238,0) 100%)",
        }}
      />
    </section>
  );
}
