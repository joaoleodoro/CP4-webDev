import "./styles.css";
function Header() {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li className="headerLinks">Home</li>
                    <li className="headerLinks">Sobre</li>
                    <li className="headerLinks">Contato</li>
                </ul>
            </nav>
        </header>);
}

export default Header;