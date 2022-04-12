import CardList from '../../shared/Cards/CardList';
import Hero from '../../shared/Hero';
import ProjectCard from '../../shared/Projects/ProjectCard';
import { Section } from '../../shared/Section';
import Cta from '../../shared/Cta';
import { ProjectLayout } from '../../shared/Projects/ProjectLayout';
import { Container } from '../../shared/Container';

import timBrownImage from '../../../assets/graphic-design/desktop/image-change.jpg';
import boxedWaterImage from '../../../assets/graphic-design/desktop/image-boxed-water.jpg';
import scienceImage from '../../../assets/graphic-design/desktop/image-science.jpg';
import webDesignMobile from '../../../assets/home/mobile/image-web-design.jpg';
import webDesignTablet from '../../../assets/home/tablet/image-web-design.jpg';
import webDesignDesktop from '../../../assets/home/desktop/image-web-design-small.jpg';
import appDesignMobile from '../../../assets/home/mobile/image-app-design.jpg';
import appDesignTablet from '../../../assets/home/tablet/image-app-design.jpg';
import appDesignDesktop from '../../../assets/home/desktop/image-app-design.jpg';

function index() {
  const cards = [
    {
      image: timBrownImage,
      title: 'TIM BROWN',
      description: 'A book cover designed for Tim Brown’s new release, Change',
    },
    {
      image: boxedWaterImage,
      title: 'BOXED WATER',
      description: 'A simple packaging concept made for Boxed Water',
    },
    {
      image: scienceImage,
      title: 'SCIENCE!',
      description:
        'A poster made in collaboration with the Federal Art Project',
    },
  ];
  return (
    <>
      <Hero>
        <h2>Graphic Design</h2>
        <p>
          We deliver eye-catching branding materials that are tailored to meet
          your business objectives.
        </p>
      </Hero>
      <Section>
        <CardList cards={cards} />
      </Section>
      <Section>
        <Container>
          <ProjectLayout>
            <ProjectCard
              title="App Design"
              link="/app-design"
              image={{
                mobile: webDesignMobile,
                tablet: webDesignTablet,
                desktop: webDesignDesktop,
              }}
            />
            <ProjectCard
              title="Web Design"
              link="/web-design"
              image={{
                mobile: appDesignMobile,
                tablet: appDesignTablet,
                desktop: appDesignDesktop,
              }}
            />
          </ProjectLayout>
          <Cta />
        </Container>
      </Section>
    </>
  );
}
export default index;
