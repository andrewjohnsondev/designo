import logoDark from '../../assets/shared/desktop/logo-dark.png';
import logoLight from '../../assets/shared/desktop/logo-light.png';
import { Link } from 'react-router-dom';

export const LogoDark = () => {
  return (
    <Link to="/">
      <img className="cursor-pointer" src={logoDark} alt="Designo - home" />
    </Link>
  );
};
export const LogoLight = () => {
  return (
    <Link to="/">
      <img className="cursor-pointer" src={logoLight} alt="Designo - home" />
    </Link>
  );
};
