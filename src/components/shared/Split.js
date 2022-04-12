import styled from 'styled-components';

export const Split = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 6rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: row;
  }
`;
