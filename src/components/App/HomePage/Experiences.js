import { Split } from '../../shared/Split';

import ExperienceCard from '../../shared/Experiences/ExperienceCard';
import passionateImg from '../../../assets/home/desktop/illustration-passionate.svg';
import resourcefulImg from '../../../assets/home/desktop/illustration-resourceful.svg';
import friendlyImg from '../../../assets/home/desktop/illustration-friendly.svg';

function Experiences() {
  return (
    <Split>
      <h2 hidden>Experiences</h2>
      <ExperienceCard
        isSplit="true"
        image={passionateImg}
        title="Passionate"
        body="Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
      />
      <ExperienceCard
        isSplit="true"
        image={resourcefulImg}
        title="RESOURCEFUL"
        body="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients needs."
      />
      <ExperienceCard
        isSplit="true"
        image={friendlyImg}
        title="FRIENDLY"
        body=" We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
      />
    </Split>
  );
}
export default Experiences;
