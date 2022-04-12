import { StyledHeader } from './style';
import Navigation, { StyledNavigation } from './Navigation';
import hamburgerIcon from '../../../assets/shared/mobile/icon-hamburger.svg';
import closeIcon from '../../../assets/shared/mobile/icon-close.svg';
import { LogoDark } from '../../shared/Logo';
import { useLocation } from 'react-router-dom';
import { Container } from '../../shared/Container';
import { useLayoutEffect } from 'react';

function Header({ isMenuOpen, onMenuChange }) {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <Container>
      <StyledHeader>
        <LogoDark />
        <button
          onClick={() => onMenuChange()}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
        >
          <img src={isMenuOpen ? closeIcon : hamburgerIcon} alt="menu" />
        </button>
        <Navigation onMenuChange={onMenuChange} isMenuOpen={isMenuOpen} />
      </StyledHeader>
    </Container>
  );
}
export default Header;
