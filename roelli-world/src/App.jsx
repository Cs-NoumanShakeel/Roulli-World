import Section1 from "./pages/Section1";
import Section2 from "./pages/Section2";
import Section3 from "./pages/Section3";
import Section4 from "./pages/Section4";
import "./css/app.css";

export default function App() {
  return (
    <div className="app-container">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
}
