import styled from 'styled-components';
import arrow from '../../../assets/shared/desktop/icon-right-arrow.svg';
import { Link } from 'react-router-dom';
import './Project.css';

const StyledProjectCard = styled.article`
  background-image: url(${({ image }) => image.mobile});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 15px;
  display: grid;
  place-content: center;
  gap: 0.75rem;
  text-align: center;
  color: white;
  position: relative;
  min-height: 100%;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background-color: rgba(0, 0, 0, 0.7);
  }

  h3 {
    z-index: 9999;
  }

  p {
    display: flex;
    align-items: center;
    margin-inline: auto;
    gap: 1rem;

    color: inherit;
    letter-spacing: 5px;
    z-index: 9999;
    transition: transform 0.5s ease;
  }

  img {
    width: 4px;
    height: 8px;
  }

  p:hover img {
    transform: translateX(5px);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    background-image: url(${({ image }) => image.tablet});
    gap: 1.5rem;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    background-image: url(${({ image }) => image.desktop});
  }
`;

function ProjectCard({ title, link, image }) {
  return (
    <Link className="project-card" to={link}>
      <StyledProjectCard image={image}>
        <h3 className="text-lg">{title}</h3>
        <p className="text-sm">
          View Project <img src={arrow} alt="" />
        </p>
      </StyledProjectCard>
    </Link>
  );
}
export default ProjectCard;
