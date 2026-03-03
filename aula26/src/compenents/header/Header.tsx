import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>
            <li>
              <Link to="/quem-somos">Quem somos</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/meu-contatinho">Contato</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Header;
