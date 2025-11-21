export default function Heroes() {
  const cards = [
    {
      img: "/Explorer.webp",
      name: "ROELLI",
      job: "Explorer",
      description: [
        "An adventurous",
        "leader with a",
        "passion for discovery.",
      ],
    },
    {
      img: "/Kiyana.webp",
      name: "KIYANA",
      job: "Inventor",
      description: [
        "A brilliant young",
        "mind always inven-",
        "ting new gadgets.",
      ],
    },
    {
      img: "/K-Dip.webp",
      name: "K-DIP",
      job: "Sidekick",
      description: ["A loyal companion", "who is always", "ready to help."],
    },
    {
      img: "/Luna.webp",
      name: "LUNA",
      job: "GUIDE",
      description: ["A mystical being", "with a gentle heart", "and wisdom."],
    },
  ];

  return (
    <div
      className=" relative w-full max-w-full px-8 py-16 text-white
                 md:py-[10rem] md:px-6 sm:py-10 sm:px-4 xs:py-8 xs:px-4
                 max-[480px]:h-screen max-[480px]:overflow-y-auto"
      style={{ background: "#000C14" }}
    >
      {/* Local responsive rules to reduce card/image height on small screens
          while preserving the full poster (no cropped artwork). */}
      <style>{`
        /* Default: image fills width and keeps full height (height:auto) */
        .card-image {
          display: block;
          width: 100%;
          height: auto; 
          max-width: 100%;
        }

        /* On tablets / smaller desktops -> gently reduce image max-height so the card is shorter */
        @media (max-width: 1024px) {
          .card-image {
            max-height: 280px; /* adjust to taste for md-sized screens */
          }
        }
        @media (min-width:1024px){
            .card-image{
              max-height:300px;
            
            }
        }  

        /* On small screens (sm / mobile landscape) reduce more */
        @media (max-width: 768px) {
          .card-image {
            max-height: 400px;
            
          }
        }

        /* On extra-small screens (xs / mobile portrait) make images noticeably smaller */
        @media (max-width: 480px) {
          .card-image {
            max-height: 3000px;
          }
        }
      `}</style>

      <h1
        className="text-center uppercase text-3xl tracking-[2px] mb-12 xl:text-5xl md:text-4.5xl sm:text-4xl xs:text-xl"
        style={{
          background: "linear-gradient(to right, #20D4F2, #00C6F9)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          fontStyle: "bold",
        }}
      >
        MEET THE HEROES
      </h1>

      <div className="cards-container flex flex-wrap justify-center gap-20 max-w-[1400px] mx-auto max-[480px]:flex-col max-[480px]:items-center max-[480px]:gap-4">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`relative flex flex-col rounded-xl
                        w-[240px]
                        md:w-[220px]
                        sm:w-[calc(50%-0.5rem)] sm:min-w-[200px]
                        xs:w-4/5 xs:max-w-[280px]
                        transition-transform duration-300 hover:-translate-y-2`}
            style={{
              background: "#000C14",
              border: "2px solid #062F3D",
              boxShadow: "0 8px 30px rgba(0,0,0,0.45)",
              overflow: "hidden",
              padding: 0,
              boxSizing: "border-box",
            }}
          >
            {/* Image — width:100% + responsive max-height rules above.
                Using max-height + height:auto ensures the image "zooms out"
                on narrower cards (it becomes smaller) while never cropping the poster.
                If the image's natural height is smaller than the max-height, it stays at natural size. */}
            <img
              src={card.img}
              alt={card.name}
              className="card-image "
              style={{
                // Keep display:block via class, extra safety for some browsers:
                display: "block",
              }}
            />

            {/* Description: small padding so card height reduces along with image;
                you can tweak px/py values to make cards even shorter on mobile. */}
            <div
              className="w-full px-3 py-3 text-white"
              style={{
                background: "transparent",
                textAlign: "center",
              }}
            >
              <p
                className="m-0 text-[0.95rem] md:text-[1rem] sm:text-[1.2rem] xs:text-[0.85rem] leading-tight"
                style={{ lineHeight: 1.05, color: "#FFFFFF" }}
              >
                {card.description.map((line, idx) => (
                  <span key={idx} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div
        className="absolute inset-x-0 bottom-0 mx-auto h-1 w-[40%]"
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,1) 35%, rgba(34,211,238,0) 100%)",
        }}
      />
      {/* <div className="absolute inset-x-0 bottom-0 h-1 bg-cyan-400/90" /> */}
    </div>
  );
}
