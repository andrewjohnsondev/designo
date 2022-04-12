import facebook from '../../../assets/shared/desktop/icon-facebook.svg';
import youtube from '../../../assets/shared/desktop/icon-youtube.svg';
import twitter from '../../../assets/shared/desktop/icon-twitter.svg';
import pinterest from '../../../assets/shared/desktop/icon-pinterest.svg';
import instagram from '../../../assets/shared/desktop/icon-instagram.svg';
import styled from 'styled-components';

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  a {
    cursor: pointer;
  }
`;
function Socials({ layoutName }) {
  return (
    <SocialContainer className={layoutName}>
      <a href="#">
        <img src={facebook} alt="facebook" />
      </a>
      <a href="#">
        <img src={youtube} alt="youtube" />
      </a>
      <a href="#">
        <img src={twitter} alt="twitter" />
      </a>
      <a href="#">
        <img src={pinterest} alt="pinterest" />
      </a>
      <a href="#">
        <img src={instagram} alt="instagram" />
      </a>
    </SocialContainer>
  );
}
export default Socials;
