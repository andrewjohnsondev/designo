import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${({ background }) => background};
  color: ${({ color }) => color};
  border: none;
  text-transform: uppercase;
  cursor: pointer;
  display: inline-block;
  font-weight: 500;
  font-size: 15px;
  padding: 1em 1.5625em;
  border-radius: 0.5rem;
  transition: transform 0.1s ease-in-out;

  a {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    background-color: ${({ hover }) => hover.background};
    color: ${({ hover }) => hover.color};
  }
`;
