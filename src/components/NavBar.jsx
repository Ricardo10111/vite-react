import ViteLogo from "../components/ViteLogo";
export default function NavBar() {
  return (
    <nav id="nav-bar">
      <section id="nav-logo-container">
        <div id="nav-logo-search">
          <ViteLogo height="1.8rem" width="1.5rem" />
          <span>Vite</span>
        </div>
        <div id="docsearch">
            <span><img src="public/searchmagnifierinterfacesymbol1_79893.svg" alt="" /></span>
          <input
            type="input"
            className=" DocSearch-Button"
            placeholder="Search"
          />
          
        </div>
      </section>
      <section id="nav-info">
        <p href="#Guide">Guide</p>
        <p href="#Config">Config</p>
        <p href="#Plugins">Plugins</p>
        <p href="#Resources">Resources</p>
        <p href="#Version">Version</p>
        <span><img src="public/three_dots_icon_159804.svg" alt="" /></span>
      </section>
    </nav>
  );
}
