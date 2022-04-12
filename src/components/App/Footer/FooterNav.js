import styled from 'styled-components';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const StyledFooterNav = styled.nav`
  ul {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 2rem;
    padding: 0;
  }

  a {
    color: white;
    font-size: ${({ theme }) => theme.textSize.mobile.sm};
    text-transform: uppercase;
    text-decoration: none;
    transition: opacity 0.2s ease;
  }

  a:hover {
    opacity: 0.8;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    ul {
      flex-direction: row;
      gap: 2.625rem;
    }
  }
`;

function FooterNav({ layoutName }) {
  return (
    <StyledFooterNav className={layoutName}>
      <ul className="remove-defaults" aria-label="secondary">
        <li>
          <Link to="/about">Our company</Link>
        </li>
        <li>
          <Link to="/locations">Locations</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </StyledFooterNav>
  );
}
export default FooterNav;
