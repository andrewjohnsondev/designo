import styled from 'styled-components';

const StyledCard = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  background-color: ${({ theme }) => theme.colors.primary.accent};
  transition: all 0.3s ease;
  border-radius: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.peach};
    color: white;

    h3 {
      color: white;
    }
  }
  img {
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    display: block;
    max-width: 100%;
  }

  div {
    padding: 2rem;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  h3 {
    color: ${({ theme }) => theme.colors.primary.peach};
    text-transform: uppercase;
    letter-spacing: 5px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    img {
      border-radius: 10px 0 0 10px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    img {
      border-radius: 10px 10px 0 0;
    }
  }
`;

function Card({ image, title, description }) {
  return (
    <StyledCard href="#">
      <img src={image} alt="" />

      <div>
        <h3 className="text-md">{title}</h3>
        <p>{description}</p>
      </div>
    </StyledCard>
  );
}
export default Card;
