import styled from 'styled-components';
import pattern from '../../assets/shared/desktop/bg-pattern-call-to-action.svg';

const Hero = styled.article`
  background-image: url(${pattern});
  background-color: ${({ theme }) => theme.colors.primary.peach};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: grid;
  place-content: center;
  gap: 1rem;
  padding-block: 6rem;
  color: white;
  text-align: center;
  max-width: 68rem;

  h2 {
    font-size: ${({ theme }) => theme.textSize.mobile.xl};
    font-weight: 500;
  }

  p {
    max-width: 40ch;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-block: 4rem;
    border-radius: 10px;
    margin-inline: 2rem;
    h2 {
      font-size: ${({ theme }) => theme.textSize.desktop.xl};
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-inline: auto;
  }
`;

export default Hero;
