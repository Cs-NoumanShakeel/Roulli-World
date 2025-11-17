export default function Section6() {
  const cards = [
    {
      img: "/Explorer.png",
      name: "ROELLI",
      job: "Explorer",
      description: ["An adventurous", "leader with a", "passion for discovery."],
    },
    {
      img: "/Kiyana.png",
      name: "KIYANA",
      job: "Inventor",
      description: ["A brilliant young", "mind always inven-", "ting new gadgets."],
    },
    {
      img: "/K-Dip.png",
      name: "K-DIP",
      job: "Sidekick",
      description: ["A loyal companion", "who is always", "ready to help."],
    },
    {
      img: "/Luna.png",
      name: "LUNA",
      job: "GUIDE",
      description: ["A mystical being", "with a gentle heart", "and wisdom."],
    },
  ];

  // Radial gradient colors for each card
  const cardRadialColors = [
    '#002B31', // Card 1
    '#353210', // Card 2
    '#924801', // Card 3
    'rgba(224, 145, 2, 0.3)', // Card 4 - reduced radial effect
  ];

  return (
    <div
      className="w-full max-w-full px-8 py-16 text-white
                 md:py-[10rem] md:px-6 sm:py-10 sm:px-4 xs:py-8 xs:px-4
                 max-[480px]:h-screen max-[480px]:overflow-y-auto"
      style={{ background: "#000C14" }}
    >
      {/* local styles for animations */}
      <style>{`
        @keyframes gradient-slide {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes pulse-opacity {
          0% { opacity: 0.6; transform: scale(0.98); }
          50% { opacity: 1; transform: scale(1.02); }
          100% { opacity: 0.6; transform: scale(0.98); }
        }
      `}</style>

      <h1
        className="text-center uppercase text-3xl tracking-[2px] mb-12 md:text-2.5xl sm:text-2xl xs:text-xl"
        style={{
          background: "linear-gradient(to right, #20D4F2, #00C6F9)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        MEET THE HEROES
      </h1>

      <div className="cards-container flex flex-wrap justify-center gap-20 max-w-[1400px] mx-auto max-[480px]:flex-col max-[480px]:items-center max-[480px]:gap-4">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`relative flex flex-col items-center rounded-xl p-6 text-center
                        w-[240px] h-[400px]
                        md:w-[220px] md:h-[380px]
                        sm:w-[calc(50%-0.5rem)] sm:min-w-[200px] sm:h-[360px]
                        xs:w-4/5 xs:max-w-[280px] xs:h-[350px]
                        transition-transform duration-300 hover:-translate-y-2`}
            style={{

              background: `radial-gradient(ellipse 50% 40% at 50% 35%, ${cardRadialColors[i]}, #000C14 90%)`,
              border: "2px solid #062F3D",
              boxShadow: "0 8px 30px rgba(0,0,0,0.45)",
              overflow: "hidden",
            }}
          >
            {/* image container: contains radial overlay for pulsing glow under the image */}
            <div className="relative w-full flex justify-center items-start">
              {/* pulsing radial overlay (positioned behind the image) */}
              <span
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: 180,
                  height: 180,
                  top: 2,
                  zIndex: 0,
                  left: "-1%",
                  transform: "translateX(-50%)",
                  background: `radial-gradient(circle, ${cardRadialColors[i]} 0%, transparent 50%)`,
                  filter: "blur(18px)",
                  opacity: 0.85,
                  animation: "pulse-opacity 3.6s ease-in-out infinite",
                }}
              />
              <img
                src={card.img}
                alt={card.name}
                className={`relative z-10 object-contain mt-4
                            w-[150px] h-[150px]
                            md:w-[140px] md:h-[140px]
                            sm:w-[130px] sm:h-[130px]
                            xs:w-[120px] xs:h-[120px]`}
                style={
                  i === 3
                    ? {
                        // extra glow on card 4 image - more shiny
                        filter:
                          "drop-shadow(0 0 25px rgba(224,145,2,0.9)) drop-shadow(0 0 35px rgba(224,145,2,0.6)) drop-shadow(0 0 45px rgba(224,145,2,0.3))",
                      }
                    : {}
                }
              />
            </div>

            {/* NAME (gradient clipped to text — no rectangular block) */}
            <h2
              className="mt-4 font-bold uppercase text-[1.6rem] md:text-[1.4rem] sm:text-[1.3rem] xs:text-[1.25rem]"
              style={{
                display: "inline-block",
                background: "linear-gradient(90deg, #EADA2F 0%, #F1B819 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                backgroundSize: "200% 100%",
                animation: "gradient-slide 6s linear infinite",
              }}
            >
              {card.name}
            </h2>

            {/* JOB (aqua gradient) */}
            <h3
              className="mt-1 font-semibold uppercase text-[1.1rem] md:text-[1rem] sm:text-[0.95rem] xs:text-[0.9rem]"
              style={{
                display: "inline-block",
                background: "linear-gradient(90deg, #31BBCD 0%, #3CBAC8 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                backgroundSize: "200% 100%",
                animation: "gradient-slide 6s linear infinite",
              }}
            >
              {card.job}
            </h3>


            <p
              className="absolute bottom-[25px] left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] text-[0.95rem] md:text-[0.9rem] sm:text-[0.9rem] xs:text-[0.85rem] leading-tight text-gray-500"
              style={{ zIndex: 2 }}
            >
              {card.description.map((line, idx) => (
                <span key={idx} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}