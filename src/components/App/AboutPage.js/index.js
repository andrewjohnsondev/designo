import AboutCard from './AboutCard';
import { Section } from '../../shared/Section';
import { Container } from '../../shared/Container';
import Cta from '../../shared/Cta';
import aboutHeroMobile from '../../../assets/about/mobile/image-about-hero.jpg';
import aboutHeroDesktop from '../../../assets/about/desktop/image-about-hero.jpg';
import talentImageMobile from '../../../assets/about/mobile/image-world-class-talent.jpg';
import talentImageDesktop from '../../../assets/about/desktop/image-world-class-talent.jpg';
import realDealImageMobile from '../../../assets/about/mobile/image-real-deal.jpg';
import realDealImageDesktop from '../../../assets/about/desktop/image-real-deal.jpg';
import LocationLink from '../../shared/LocationLinks';

function index() {
  return (
    <>
      <AboutCard
        isImageLeft="false"
        isLight="false"
        mobileImage={aboutHeroMobile}
        desktopImage={aboutHeroDesktop}
        title="About Us"
        description="Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences."
      />
      <Section>
        <AboutCard
          isImageLeft="true"
          isLight="true"
          mobileImage={talentImageMobile}
          desktopImage={talentImageDesktop}
          title="World-class talent"
          description="We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms."
          extraDescription="Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission."
        />
      </Section>
      <Section>
        <Container>
          <LocationLink />
        </Container>
      </Section>
      <Section>
        <AboutCard
          isImageLeft="false"
          isLight="true"
          mobileImage={realDealImageMobile}
          desktopImage={realDealImageDesktop}
          title="The real deal"
          description="As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success."
          extraDescription="We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results."
        />
        <Container>
          <Cta />
        </Container>
      </Section>
    </>
  );
}
export default index;
