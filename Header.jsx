export default function Header() {
  return (
    <header className='header'>
      <img src='src/assets/react-logo' alt='react logo' className='nav-logo' />
      <nav>
        <ul className='nav-list'>
          <li className='nav-list-item'>Pricing</li>
          <li className='nav-list-item'>About</li>
          <li className='nav-list-item'>Contact</li>
        </ul>
      </nav>
    </header>
  );
}