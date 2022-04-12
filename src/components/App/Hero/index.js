import { StyledHeroHome } from './style';
import { StyledButton } from '../../shared/Button';
import heroImage from '../../../assets/home/desktop/phone.svg';
import { withTheme } from 'styled-components';
import { Link } from 'react-router-dom';

function HeroHome({ theme }) {
  return (
    <StyledHeroHome>
      <div>
        <h1 className="text-xl">
          Award-winning custom designs and digital branding solutions
        </h1>
        <p>
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <StyledButton
          background={theme.colors.primary.white}
          color={theme.colors.primary.black}
          hover={{
            background: theme.colors.secondary.lightPeach,
            color: theme.colors.primary.white,
          }}
        >
          <Link to="/about">Learn More</Link>
        </StyledButton>
      </div>

      <div className="img-wrapper">
        <img src={heroImage} alt="" />
      </div>
    </StyledHeroHome>
  );
}
export default withTheme(HeroHome);
