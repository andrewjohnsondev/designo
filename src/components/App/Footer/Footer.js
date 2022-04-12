import styled from 'styled-components';
import { Container } from '../../shared/Container';
import { LogoLight } from '../../shared/Logo';
import FooterNav from './FooterNav';
import FooterInfo from './FooterInfo';
import Socials from './Socials';
const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary.black};
`;
const FooterGrid = styled.footer`
  display: grid;

  grid-template-areas:
    'logo'
    'line'
    'nav'
    'info1'
    'info2'
    'socials';
  gap: 2.5rem;
  padding-bottom: 4rem;
  padding-top: 10rem;

  .line {
    height: 2px;
    background-color: #979797;
    opacity: 0.2;
    grid-area: line;
  }

  .logo {
    display: flex;
    justify-content: center;
    img {
      height: 27px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: 15rem;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      'logo logo logo nav nav nav'
      'line line line line line line'
      'info1 info1 info2 info2 socials socials';

    .logo {
      grid-area: logo;
    }
    .nav {
      grid-area: nav;
    }
    .info1 {
      grid-area: info1;
    }
    .info2 {
      grid-area: info2;
    }
    .socials {
      grid-area: socials;
      align-self: end;
    }
    .logo {
      display: flex;
      justify-content: start;
      align-items: center;
    }
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <FooterGrid>
          <div className="logo">
            <LogoLight />
          </div>
          <div className="line"></div>
          <FooterNav layoutName="nav" />
          <FooterInfo
            title="Designo Central Office"
            info1="3886 Wellington Street"
            info2="Toronto, Ontario M9C 3J5"
            layoutName="info1"
          />
          <FooterInfo
            layoutName="info2"
            title="Contact Us (Central Office)"
            info1="P : +1 253-863-8967"
            info2="M : contact@designo.co"
          />
          <Socials layoutName="socials" />
        </FooterGrid>
      </Container>
    </StyledFooter>
  );
}
export default Footer;
