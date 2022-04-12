import styled from 'styled-components';
import heroImage from '../../../assets/home/desktop/phone.svg';
import pattern from '../../../assets/home/desktop/bg-pattern-hero-home.svg';

export const StyledHeroHome = styled.article`
  display: grid;
  place-items: center;
  gap: 5rem;
  background-color: ${({ theme }) => theme.colors.primary.peach};
  color: ${({ theme }) => theme.colors.primary.white};
  text-align: center;
  padding: 5rem 1rem 0;
  overflow: hidden;
  background-image: url(${pattern});
  background-repeat: no-repeat;
  background-size: cover;

  div:first-child {
    max-width: 30rem;
    margin-inline: auto;
  }

  p {
    font-size: 15px;
  }

  .img-wrapper {
    margin-bottom: -40%;
    filter: drop-shadow(20px -40px 80px rgba(93, 2, 2, 0.497569));
  }

  img {
    margin-inline: auto;
  }
  div:first-child > * + * {
    margin-top: 1.5rem;
  }

  @media (min-width: 45em) {
    background-position: 200px 100px;
    place-content: center;
    margin-inline: 2em;
    border-radius: 15px;
    gap: 4.125rem;
    max-width: 69rem;
    margin-inline: auto;

    div:first-child {
      max-width: 573px;
      margin-inline: auto;
    }

    div:first-child > * + * {
      margin-top: 1.3rem;
    }
  }

  @media (min-width: 60em) {
    text-align: left;
    grid-template-columns: 5.9375rem 2fr 1fr 5.9375rem;
    grid-template-rows: 9.0625rem 1fr 9.0625rem;
    padding: 0;
    gap: 0;

    div:first-child {
      grid-column: 2 / span 1;
      grid-row: 2 / span 1;
    }

    p {
      max-width: 445px;
    }

    .img-wrapper {
      grid-column: 3 / span 1;
      grid-row: 2 / -1;
      justify-self: end;
      /* margin-bottom: 0; */
    }

    div:first-child > * + * {
      margin-top: 2.5rem;
    }
  }
`;
