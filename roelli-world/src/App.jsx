import Home from "./Sections/Home";
import Apps from "./Sections/Apps";
import Reward from "./Sections/Reward";
import Future from "./Sections/Future";
import Heroes from "./Sections/Heroes";
import Community from "./Sections/Community";
import "./css/app.css";
import Brand from "./Sections/Brand";
import Footer from "./Sections/Footer";
import Arcade from "./Sections/Arcade";

export default function App() {
  return (
    <div className="app-container">
      <Home />
      <Apps />
      <Reward />
      <Future />
      <Brand />
      <Heroes />
      <Arcade />
      <Community />
      <Footer />
    </div>
  );
}
