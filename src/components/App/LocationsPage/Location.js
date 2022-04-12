import styled from 'styled-components';
import pattern from '../../../assets/shared/desktop/bg-pattern-two-circles.svg';

const StyledLocation = styled.article`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  .image {
    background-image: url(${({ image }) => image.tablet});
  }

  .content {
    background-color: ${({ theme }) => theme.colors.primary.accent};
    background-image: url(${pattern});
    background-position: bottom;
    background-repeat: no-repeat;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding-block: 5rem;
  }

  .content__inner {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    & > * {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  }

  h2 {
    color: ${({ theme }) => theme.colors.primary.peach};
  }

  h3 {
    font-weight: 500;
    letter-spacing: 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 2rem;
    /* max-width: 51rem; */
    margin-inline: 2em;

    .image,
    .content {
      border-radius: 15px;
    }

    .content {
      text-align: left;
      padding-inline: 4.5em;

      &__inner {
        flex-direction: row;
        gap: 6rem;
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: ${({ isContentLeft }) =>
      isContentLeft ? '2fr 1fr' : '1fr 2fr'};
    grid-template-areas: 'left right';
    grid-template-rows: 1fr;

    .content {
      grid-area: ${({ isContentLeft }) => (isContentLeft ? 'left' : 'right')};
    }
  }
`;

function Location({
  image,
  officeTitle,
  title,
  office,
  contact,
  isContentLeft,
}) {
  const [street, city] = office;
  const [phone, email] = contact;
  return (
    <StyledLocation
      isContentLeft={isContentLeft === 'true' ? true : false}
      image={image}
    >
      <div className="image"></div>
      <div className="content">
        <h2 className="text-lg">{title}</h2>
        <div className="content__inner">
          <div className="text-base">
            <h3>{officeTitle}</h3>
            <p>{street}</p>
            <p>{city}</p>
          </div>
          <div className="text-base">
            <h3>Contact</h3>
            <p>{phone}</p>
            <p>{email}</p>
          </div>
        </div>
      </div>
    </StyledLocation>
  );
}
export default Location;
