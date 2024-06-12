import Buttons from "./Buttons";
import ViteLogo from "./ViteLogo";
import Cards from "./Cards";

const cards = [
  {
    emoji: "💡",
    title: "Instant Server Start",
    info: "On demand file serving over native ESM, no bundling required!",
  },
  {
    emoji: "⚡️",
    title: "Lightning Fast HMR",
    info: "Hot Module Replacement (HMR) that stays fast regardless of app size.",
  },
  {
    emoji: "🛠️",
    title: "Rich Features",
    info: "Out-of-the-box support for TypeScript, JSX, CSS and more.",
  },
  {
    emoji: "📦",
    title: "Optimized Build",
    info: "Pre-configured Rollup build with multi-page and library mode support.",
  },
  {
    emoji: "🔩",
    title: "Universal Plugins",
    info: "Rollup-superset plugin interface shared between dev and build.",
  },
  {
    emoji: "🔑",
    title: "Fully Typed APIs",
    info: "Flexible programmatic APIs with full TypeScript typing.",
  },
];

export default function Menu() {
  return (
    <section id="menu">
      <section id="menu-container">
        <div id="left-section">
          <div id="info">
            <h1 className="h1-colors">Vite</h1>
            <h1 className="h1-info">Next Generation Frontend Tooling</h1>
            <h2>
              Get ready for a development environment that can finally catch up
              with you.
            </h2>
          </div>
            <Buttons />
        </div>
        <div id="right-section ">
          <div className="logo-container">
            <ViteLogo height="16rem" width="19rem" />
          </div>
        </div>
        <div id="bottom-section">
          <section id="cards-container">
            {cards.map((card) => {
              return (
                <Cards
                  key={`card-${card.title}`}
                  emoji={card.emoji}
                  title={card.title}
                  info={card.info}
                />
              );
            })}
          </section>
        </div>
      </section>
    </section>
  );
}
