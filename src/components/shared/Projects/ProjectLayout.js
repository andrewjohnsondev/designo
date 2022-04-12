import styled from 'styled-components';

export const ProjectLayout = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 15rem;
  gap: 1.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-auto-rows: 12.5rem;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 19.25rem;
  }
`;
