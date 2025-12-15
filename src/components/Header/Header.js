
export default function Header() {
  return (
    <header className="header">
      <h1>VeraDasha</h1>
      <nav className="nav">
        <ul>
          <li><a href="/">Главная</a></li>
          <li><a href="/about">О нас</a></li>
          <li><a href="/services">Услуги</a></li>
          <li><a href="/contact">Контакты</a></li>
        </ul>
      </nav>
    </header>
  );
}