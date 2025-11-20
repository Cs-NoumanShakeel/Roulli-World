import "../css/app.css";

export default function Future() {
  const cards = [
    {
      img: "/PlayCircle.png",
      title: "PLAY",
      description: ["Dive into a world", "of fun and", "adventure"]
    },
    {
      img: "/coin.png",
      title: "EARN",
      description: ["Conquer", "challenges and", "win rewards"]
    },
    {
      img: "/shopping.png",
      title: "SHOP",
      description: ["Exchange", "coins for", "real-world items"]
    },
    {
      img: "/person.png",
      title: "COMMUNITY",
      description: ["Join players", "on a shared", "journey"]
    },
     
  ];

  return (
    <div 
      className=" relative w-full max-w-full px-8 py-16 box-border text-white overflow-x-hidden
                    md:py-[10rem] md:px-6
                    sm:py-10 sm:px-4
                    xs:py-8 xs:px-4
                    max-[480px]:h-screen max-[480px]:overflow-y-auto max-[480px]:py-8"
      style={{
        background: 'radial-gradient(circle at center, #0A1381, #000211, #000211)'
      }}
    >
      <h1 className="text-center text-[#00d9ff] uppercase text-3xl tracking-[2px] mb-12
                     md:text-2.5xl md:mb-10
                     sm:text-2xl sm:mb-8
                     xs:text-xl xs:mb-6">
        FUTURE GRID
      </h1>

      <div className="cards-container flex flex-wrap justify-center gap-20 max-w-[1400px] mx-auto
                      max-[480px]:flex-nowrap max-[480px]:flex-col max-[480px]:items-center max-[480px]:gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`relative flex flex-col items-center bg-[#000211] border-2 border-[#0A1381] rounded-xl p-6 box-border text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,217,255,0.3)] hover:border-[#00d9ff]
                        w-[240px] h-[350px]
                        md:w-[220px] md:h-[330px]
                        sm:w-[calc(50%-0.5rem)] sm:min-w-[200px] sm:h-[320px]
                        xs:w-4/5 xs:max-w-[280px] xs:h-[300px]
                        very-xs:h-[280px] very-xs:max-w-[260px]`}
          >
            <img
              src={card.img}
              alt={card.title}
              className={`object-contain
                          ${index === 3 ? '' : 'mt-4'}
                          ${index === 2 
                            ? '!w-[90px] !h-[90px] md:!w-[80px] md:!h-[80px] xs:!w-[70px] xs:!h-[70px]' 
                            : ''}
                         ${
                        index === 3
                          ? 'mt-4 !w-[100px] !h-[100px] md:!w-[90px] md:!h-[90px] sm:!w-[90px] sm:!h-[90px] xs:!w-[80px] xs:!h-[80px]'
                          : 'w-[100px] h-[100px] md:w-[90px] md:h-[90px] sm:w-[90px] sm:h-[90px] xs:w-[80px] xs:h-[80px]'
                          }
                          `}
            />

            <h2
              className={`absolute bottom-[130px] left-1/2 transform -translate-x-1/2 w-full text-orange-500 font-bold uppercase
                          text-[1.6rem] md:text-[1.4rem] sm:text-[1.4rem] xs:text-[1.3rem] very-xs:text-[1.2rem]`}
            >
              {card.title}
            </h2>
            <p
              className={`absolute bottom-[55px] left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] text-[#00d9ff] text-[0.95rem] md:text-[0.95rem] sm:text-[0.9rem] xs:text-[0.9rem] very-xs:text-[0.85rem]`}
            >
              {card.description.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
       <div className="absolute inset-x-0 bottom-0 h-1 bg-cyan-400/90" />
    </div>
  );
}
