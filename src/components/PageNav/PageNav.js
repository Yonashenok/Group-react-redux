import { Link, NavLink } from 'react-router-dom';
import classes from './PageNav.module.css';
import planet from '../../assets/img/planet.png';

function PageNav() {
  return (
    <nav className={classes.container}>
      <Link className={classes.logo} to="/">
        <img src={planet} alt="logo planet" />
        Space Travelers&apos; Hub
      </Link>
      <ul className={classes.list}>
        <li>
          <NavLink to="/rockets">Rockets</NavLink>
        </li>
        <li>
          <NavLink to="/missions">Missions</NavLink>
        </li>
        <li>
          <NavLink to="/myProfile">My Profile</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default PageNav;
