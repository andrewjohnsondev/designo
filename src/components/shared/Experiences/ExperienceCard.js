import styled from 'styled-components';
import { useTheme } from 'styled-components';

import ExperienceImage from './ExperienceImage';
import { StyledButton } from '../Button';

const StyledExperienceCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  text-align: center;
  justify-content: center;
  align-items: center;

  button {
    align-self: center;
  }

  & > * {
    flex: 1;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  h3 {
    text-transform: uppercase;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: ${({ isSplit }) => isSplit && 'row'};
    align-items: center;

    text-align: ${({ isSplit }) => (isSplit ? 'left' : 'center')};
    .img {
      flex-shrink: 0;
    }
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
    text-align: center;
  }
`;

function ExperienceCard({ title, body, image, buttonContent, isSplit }) {
  const theme = useTheme();
  const background = theme.colors.primary.peach;
  const color = theme.colors.primary.white;
  const hover = {
    background: theme.colors.secondary.lightPeach,
    color: theme.colors.primary.white,
  };
  const renderContent = buttonContent ? (
    <StyledButton background={background} color={color} hover={hover}>
      {buttonContent}
    </StyledButton>
  ) : (
    <p>{body}</p>
  );
  return (
    <StyledExperienceCard isSplit={isSplit}>
      <ExperienceImage className="img" image={image} />
      <div>
        <h3 className="text-md">{title}</h3>
        {renderContent}
      </div>
    </StyledExperienceCard>
  );
}
export default ExperienceCard;
