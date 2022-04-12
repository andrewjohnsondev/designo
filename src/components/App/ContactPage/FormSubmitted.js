import styled from 'styled-components';

export const FormSubmitted = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.peach};
  opacity: 0;
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  animation: ${({ animate }) => (animate ? 'submit 1.5s ease' : '')};
  p {
    font-size: ${({ theme }) => theme.textSize.mobile.xl};
  }

  @keyframes submit {
    0% {
      visibility: visible;
      opacity: 0;
    }

    10% {
      opacity: 100%;
    }

    80% {
      opacity: 100%;
    }

    100% {
      opacity: 0;
      visibility: hidden;
    }
  }
`;
