import canadaImage from '../../assets/shared/desktop/illustration-canada.svg';
import australiaImage from '../../assets/shared/desktop/illustration-australia.svg';
import ukImage from '../../assets/shared/desktop/illustration-united-kingdom.svg';
import { Split } from './Split';
import ExperienceCard from './Experiences/ExperienceCard';
function LocationLinks() {
  return (
    <Split>
      <h2 hidden>Experiences</h2>
      <ExperienceCard
        image={canadaImage}
        title="Canada"
        buttonContent="See Location"
      />
      <ExperienceCard
        image={australiaImage}
        title="Australia"
        buttonContent="See Location"
      />
      <ExperienceCard
        image={ukImage}
        title="United Kingdom"
        buttonContent="See Location"
      />
    </Split>
  );
}
export default LocationLinks;
