import styled from 'styled-components';

const Info = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: center;
  color: white;
  opacity: 0.5;

  h3 {
    font-weight: bold;
    letter-spacing: 1px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    text-align: left;
  }
`;

function FooterInfo({ title, info1, info2, layoutName }) {
  return (
    <Info className={layoutName}>
      <h3>{title}</h3>
      <p>{info1}</p>
      <p>{info2}</p>
    </Info>
  );
}
export default FooterInfo;
