import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 2.5em;
  background-color: ${({ theme }) => theme.colors.primary.white};
  position: relative;
  z-index: 1000;

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    display: inline-block;
    margin-left: auto;
  }

  img {
    height: 24px;
  }

  @media (min-width: 48em) {
    button {
      display: none;
    }
  }

  @media (min-width: 69em) {
    padding: 3em 0;
  }
`;
