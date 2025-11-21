export default function Reward() {
  return (
    <section
      className="relative w-full min-h-[45vh] overflow-hidden"
      aria-labelledby="section3-heading"
    >
      {/* Background + gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #010012 30%, #010535 70%, #00000061 90%, rgba(255,255,255,0.05) 100%), url('/Disney.webp')",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 flex flex-col items-center text-center">
        {/* Heading */}
        <h2
          id="section3-heading"
          className="uppercase tracking-wide font-extrabold
                     text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px]
                     leading-tight"
          style={{
            fontFamily: "Inter, sans-serif",
            background: "linear-gradient(360deg, #20D4F2 0%, #00C6F9 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          EARN REAL-WORLD
          <br />
          REWARDS THROUGH PLAY
        </h2>

        {/* ===== MOBILE: two-column layout (shown on small screens) ===== */}
        <div className="mt-10 w-full grid grid-cols-2 gap-x-6 gap-y-6 md:hidden">
          {/* Column 1 (mobile): Starbucks, MIGROS, Disney */}
          <div className="flex flex-col items-center space-y-6">
            <div className="flex flex-col items-center">
              <img
                src="/starbucks.webp"
                alt="Starbucks"
                className="w-[64px] h-[64px] object-cover rounded-full"
              />
              {/* optional small label below image on mobile if needed */}
            </div>

            <div>
              <h3 className="text-[#F1950E] font-bold text-lg">MIGROS</h3>
            </div>

            <div>
              <img
                src="/disney-logo.webp"
                alt="Disney"
                className="w-[84px] h-auto object-contain"
              />
            </div>
          </div>

          {/* Column 2 (mobile): LC WAIKIKI, UCGIR */}
          <div className="flex flex-col items-center space-y-6">
            <div>
              <h3
                className="font-extrabold text-lg"
                style={{
                  fontFamily: "Inter, sans-serif",
                  background:
                    "linear-gradient(360deg, #20D4F2 0%, #00C6F9 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                LC WAIKIKI
              </h3>
            </div>

            <div>
              <h3
                className="font-extrabold text-lg"
                style={{
                  fontFamily: "Inter, sans-serif",
                  background:
                    "linear-gradient(360deg, #20D4F2 0%, #00C6F9 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                UCGIR
              </h3>
            </div>

            {/* keep empty to visually align with left's 3 items if needed */}
            <div aria-hidden="true" className="h-0" />
          </div>
        </div>

        {/* ===== DESKTOP: 3-column x 2-row grid (shown from md up) ===== */}
        <div className="hidden md:grid mt-12 w-full grid-cols-3 grid-rows-2 gap-y-8 gap-x-16 items-center">
          {/* Left column */}
          <div className="col-start-1 row-start-1 flex flex-col items-center justify-center">
            <img
              src="/starbucks.webp"
              alt="Starbucks"
              className="w-[72px] h-[72px] object-cover rounded-full"
            />
          </div>

          {/* Center top: LC WAIKIKI (row 1 center) */}
          <div className="col-start-2 row-start-1 flex items-center justify-center">
            <h3
              className="font-extrabold text-3xl"
              style={{
                fontFamily: "Inter, sans-serif",
                background: "linear-gradient(360deg, #20D4F2 0%, #00C6F9 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              LC WAIKIKI
            </h3>
          </div>

          {/* Right top: MIGROS (row1 right) */}
          <div className="col-start-3 row-start-1 flex items-center justify-center">
            <h3 className="text-[#F1950E] font-extrabold text-3xl">MIGROS</h3>
          </div>

          {/* Left bottom: UCGIR (under Starbucks) */}
          <div className="col-start-1 row-start-2 flex items-center justify-center">
            <h3
              className="font-extrabold text-3xl"
              style={{
                fontFamily: "Inter, sans-serif",
                background: "linear-gradient(360deg, #20D4F2 0%, #00C6F9 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              UCGIR
            </h3>
          </div>

          {/* Center bottom: Disney (under LC WAIKIKI) */}
          <div className="col-start-2 row-start-2 flex items-center justify-center">
            <img
              src="/disney-logo.webp"
              alt="Disney"
              className="w-[110px] h-auto object-contain"
            />
          </div>

          {/* Right bottom intentionally left empty so layout matches desired alignment */}
          <div className="col-start-3 row-start-2" />
        </div>

        {/* Roelli logo spanning full width, always displayed under the grid */}
        <div className="mt-12 w-full flex justify-center">
          <img
            src="/footer-logo.webp"
            alt="ROELLI WORLD"
            className="w-[220px] sm:w-[260px] md:w-[320px] lg:w-[320px] object-contain
                       drop-shadow-[0_12px_40px_rgba(241,149,14,0.45)]"
          />
        </div>
      </div>
    </section>
  );
}
