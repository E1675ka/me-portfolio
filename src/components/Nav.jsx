import "./styles/nav.css";
export default function Nav() {
  return (
    <>
      <nav className="nav-container">
        <ul>
          <li>
            <a href="">Home</a>
          </li>

          <div className="nav-left-side">
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
}
