import ViteLogo from "../components/ViteLogo";
export default function NavBar() {
  return (
    <nav id="nav-bar">
      <section id="nav-logo-container">
        <div id="nav-logo-search">
          <ViteLogo height='1.8rem' width='1.5rem' />
          <span>Vite</span>
        </div>

        <input type="search" placeholder="Search" />
      </section>
      <section id="nav-info">
        <p href="#Guide">Guide</p>
        <p href="#Config">Config</p>
        <p href="#Plugins">Plugins</p>
        <p href="#Resources">Resources</p>
        <p href="#Version">Version</p>
      </section>
    </nav>
  );
}
