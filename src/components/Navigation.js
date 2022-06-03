import { NavLink } from 'react-router-dom';
import './Navigation.css';
import Header from './Header';

function Navigation() {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quotes',
      text: 'Quotes',
    },
  ];

  return (
    <div className="header">
      <Header />
      <nav className="navigation">
        {links.map((link) => (
          <li key={link.id} className="navLink">
            <NavLink data-testid={link.id} to={link.path} className="link">
              {link.text}
            </NavLink>
          </li>
        ))}
      </nav>
    </div>
  );
}

export default Navigation;
