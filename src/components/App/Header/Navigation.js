import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

export const StyledNavigation = styled.nav`
  ul {
    display: flex;
    gap: 2.5rem;
    font-size: ${({ theme }) => theme.textSize.desktop.sm};
    letter-spacing: 2px;
    padding-left: none;
    margin-block: 0;
    text-transform: uppercase;
  }

  li {
    border-bottom: 1px transparent solid;
  }

  li:hover {
    border-color: ${({ theme }) => theme.colors.secondary.darkGrey};
  }

  a {
    color: inherit;
    text-decoration: none;
    letter-spacing: inherit;
  }

  @media (max-width: 48em) {
    ul {
      position: fixed;
      top: 6rem;
      left: 0;
      background-color: rgba(0, 0, 0, 0.9);
      color: white;
      width: 100vw;
      height: 100vh;
      flex-direction: column;
      padding-top: 3rem;
      transition: all 0.5s ease;
      z-index: -1;
      transform: translateX(${({ isMenuOpen }) => (isMenuOpen ? '0' : '150%')});
    }

    li:hover {
      border-color: transparent;
    }
  }
`;

function Navigation({ isMenuOpen, onMenuChange }) {
  const changeMenu = () => {
    onMenuChange(false);
  };
  return (
    <StyledNavigation isMenuOpen={isMenuOpen}>
      <ul
        id="primary-navigation"
        className="remove-defaults"
        aria-label="primary"
      >
        <li>
          <Link onClick={changeMenu} to="/about">
            Our Company
          </Link>
        </li>
        <li>
          <Link onClick={changeMenu} to="/locations">
            Locations
          </Link>
        </li>
        <li>
          <Link onClick={changeMenu} to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </StyledNavigation>
  );
}
export default Navigation;
