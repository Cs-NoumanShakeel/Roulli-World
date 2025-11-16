import "../css/app.css";

export default function Section3() {
  return (
    <div className="Page3-section">
      
      {/* Main heading */}
      <h1 className="main-heading">
        <span>EARN REAL-WORLD</span>
        <span>REWARDS THROUGH PLAY</span>
      </h1>

      {/* Desktop rows - visible only on desktop */}
      <div className="two-rows-container">
        {/* First row: Starbucks, LC WAIKIKI, MIGROS */}
        <div className="desktop-row first-row">
          <img src="/starbucks.png" alt="Starbucks Logo" />
          <h1 id="LC-colored">LC WAIKIKI</h1>
          <h1 id="colored">MIGROS</h1>
        </div>

        {/* Second row: UCGIR, Disney */}
        <div className="desktop-row second-row">
          <h1 id="UC-colored">UCGIR</h1>
          <img src="/disney-logo.png" alt="Disney Logo" className="disney-desktop" />
        </div>
      </div>

      {/* Mobile / responsive layout - SWAPPED: Migros and LC Waikiki positions */}
      <div className="two-columns-container">
        <div className="section3-first-row">
          <img src="/starbucks.png" alt="Starbucks Logo" />
          <h1 id="colored">MIGROS</h1>
          <img src="/disney-logo.png" alt="Disney Logo" className="disney-mobile" />
        </div>

        <div className="section3-second-row">
          <h1 id="LC-colored">LC WAIKIKI</h1>
          <h1 id="UC-colored">UCGIR</h1>
        </div>
      </div>

      {/* Disney row for mobile (if needed separately) */}
      <div className="disney-row">
        <img src="/disney-logo.png" alt="Disney Logo" />
      </div>

      {/* Third row with Roelli World logos */}
      <div className="section3-third-row">
        <img src="/roulli.png" alt="roulli" />
        <img src="/w.png" alt="world" />
      </div>

    </div>
  );
}