import styled from 'styled-components';

const ImageBackground = styled.div`
  margin-inline: auto;
  border-radius: 50%;
  width: 12.625rem;
  aspect-ratio: 1;
  background: linear-gradient(
    90deg,
    rgba(93, 2, 2, 0.0001),
    rgba(93, 2, 2, 0.3)
  );
  mix-blend-mode: normal;
`;

function ExperienceImage({ image, className }) {
  return (
    <ImageBackground className={className}>
      <img src={image} alt="" />
    </ImageBackground>
  );
}
export default ExperienceImage;
