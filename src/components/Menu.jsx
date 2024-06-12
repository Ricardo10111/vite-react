import Buttons from "./Buttons";
import ViteLogo from "./ViteLogo";
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
            <div id="button-container">
          <Buttons />

            </div>
        </div>
        <div id="right-section ">
            <div className="logo-container">
            <ViteLogo height="16rem" width="19rem" />
            </div>
          
        </div>
        <div id="bottom-section">
          <div id="card">
            <h3>Lightning Fast Cold Server Start</h3>
            <p>Start your server in milliseconds, not minutes.</p>
          </div>
          <div id="card">
            <h3>Rich Features</h3>
            <p>Out of the box support for TypeScript, JSX, CSS, and more.</p>
          </div>
          <div id="card">
            <h3>Scalable</h3>
            <p>
              Incrementally adoptable. Use Vite for a single page or a full
              stack app.
            </p>
          </div>
          <div id="card">
            <h3>Scalable</h3>
            <p>
              Incrementally adoptable. Use Vite for a single page or a full
              stack app.
            </p>
          </div>
          <div id="card">
            <h3>Scalable</h3>
            <p>
              Incrementally adoptable. Use Vite for a single page or a full
              stack app.
            </p>
          </div>
          <div id="card">
            <h3>Scalable</h3>
            <p>
              Incrementally adoptable. Use Vite for a single page or a full
              stack app.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
