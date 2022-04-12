import { useTheme } from 'styled-components';
import styled from 'styled-components';
import { StyledButton } from './Button';
import { Link } from 'react-router-dom';
import backgroundPattern from '../../assets/shared/desktop/bg-pattern-call-to-action.svg';

const StyledCTA = styled.article`
  background-image: url(${backgroundPattern});
  background-color: ${({ theme }) => theme.colors.primary.peach};
  background-size: cover;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  padding: 4em;
  border-radius: 10px;
  color: white;
  transform: translateY(30%);
  max-width: ${({ theme }) => theme.breakpoints.lg};
  margin-inline: auto;

  a {
    text-decoration: none;
    color: inherit;
  }

  p {
    margin-top: 1rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    text-align: left;
    padding: 4em;
    transform: translateY(50%);
    h2 {
      max-width: 15ch;
    }

    p {
      max-width: 30ch;
      margin-top: 1rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    p {
      max-width: 45ch;
    }
  }
`;

function Cta() {
  const theme = useTheme();

  return (
    <StyledCTA>
      <div>
        <h2 className="text-lg">Let's talk about your project</h2>
        <p>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </div>
      <StyledButton
        background={theme.colors.primary.white}
        color={theme.colors.primary.black}
        hover={{
          background: theme.colors.secondary.lightPeach,
          color: theme.colors.primary.white,
        }}
      >
        <Link to="/contact">Get in touch</Link>
      </StyledButton>
    </StyledCTA>
  );
}
export default Cta;
