import styled from 'styled-components';
import heroBackgroundPattern from '../../../assets/about/desktop/bg-pattern-hero-about-desktop.svg';
import backgroundPattern from '../../../assets/shared/desktop/bg-pattern-two-circles.svg';

const StyledAboutCard = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 1fr;
  background-repeat: no-repeat;
  background-color: ${({ isLight, theme }) =>
    isLight === 'true'
      ? theme.colors.primary.accent
      : theme.colors.primary.peach};

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    padding-block: 5em;
    padding-inline: 1em;

    color: ${({ isLight, theme }) =>
      isLight === 'true'
        ? theme.colors.primary.black
        : theme.colors.primary.white};
    text-align: center;

    h3 {
      color: ${({ theme }) => theme.colors.primary.peach};
    }
  }

  .image {
    background-image: url(${({ images }) => images.mobile});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 15px 15px 0 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    border-radius: 15px;
    max-width: 43rem;
    margin-inline: auto;

    .image {
      background-image: url(${({ images }) => images.desktop});
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: 'left right';
    max-width: 65rem;
    margin-inline: auto;

    .content {
      padding-inline: 3.5em;
      text-align: left;
      align-items: start;
      gap: 2rem;
    }

    .image {
      grid-area: ${({ isImageLeft }) =>
        isImageLeft === 'true' ? 'left' : 'right'};
      border-radius: ${({ isImageLeft }) =>
        isImageLeft === 'true' ? '15px 0 0 15px' : '0 15px 15px 0'};
    }
  }
`;

function AboutCard(props) {
  const renderTile =
    props.isLight !== 'true' ? (
      <h2 className="text-xl">{props.title}</h2>
    ) : (
      <h3 className="text-lg">{props.title}</h3>
    );

  const renderExtraDescription = props.extraDescription && (
    <p>{props.extraDescription}</p>
  );
  return (
    <StyledAboutCard
      accentBackground={heroBackgroundPattern}
      lightBackground={backgroundPattern}
      isImageLeft={props.isImageLeft}
      isLight={props.isLight}
      images={{ mobile: props.mobileImage, desktop: props.desktopImage }}
    >
      <div className="image"></div>
      <div className="content">
        {renderTile}
        <p>{props.description}</p>
        {renderExtraDescription}
      </div>
    </StyledAboutCard>
  );
}
export default AboutCard;
