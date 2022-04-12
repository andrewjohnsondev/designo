import CardList from '../../shared/Cards/CardList';
import Hero from '../../shared/Hero';
import ProjectCard from '../../shared/Projects/ProjectCard';
import { Section } from '../../shared/Section';
import Cta from '../../shared/Cta';
import { ProjectLayout } from '../../shared/Projects/ProjectLayout';
import { Container } from '../../shared/Container';

import airFilterImage from '../../../assets/app-design/desktop/image-airfilter.jpg';
import eyeCamImage from '../../../assets/app-design/desktop/image-eyecam.jpg';
import faceItImage from '../../../assets/app-design/desktop/image-faceit.jpg';
import toDoImage from '../../../assets/app-design/desktop/image-todo.jpg';
import loopStudiosImage from '../../../assets/app-design/desktop/image-loopstudios.jpg';
import graphicDesignMobile from '../../../assets/home/mobile/image-graphic-design.jpg';
import graphicDesignTablet from '../../../assets/home/tablet/image-graphic-design.jpg';
import graphicDesignDesktop from '../../../assets/home/desktop/image-graphic-design.jpg';
import webDesignMobile from '../../../assets/home/mobile/image-web-design.jpg';
import webDesignTablet from '../../../assets/home/tablet/image-web-design.jpg';
import webDesignDesktop from '../../../assets/home/desktop/image-web-design-small.jpg';

function index() {
  const cards = [
    {
      image: airFilterImage,
      title: 'airfilter',
      description:
        'Solving the problem of poor indoor air quality by filtering the air',
    },
    {
      image: eyeCamImage,
      title: 'eyeCam',
      description:
        'Product that lets you edit your favorite photos and videos at any time',
    },
    {
      image: faceItImage,
      title: 'faceit',
      description:
        'Get to meet your favorite internet superstar with the faceit app',
    },
    {
      image: toDoImage,
      title: 'toDo',
      description:
        'A todo app that features cloud sync with light and dark mode',
    },
    {
      image: loopStudiosImage,
      title: 'loopstudios',
      description: 'A VR experience app made for Loopstudios',
    },
  ];
  return (
    <>
      <Hero>
        <h2>App Design</h2>
        <p>
          Our mobile designs bring intuitive digital solutions to your customers
          right at their fingertips.
        </p>
      </Hero>
      <Section>
        <CardList cards={cards} />
      </Section>
      <Section>
        <Container>
          <ProjectLayout>
            <ProjectCard
              title="Web Design"
              link="/web-design"
              image={{
                mobile: webDesignMobile,
                tablet: webDesignTablet,
                desktop: webDesignDesktop,
              }}
            />
            <ProjectCard
              title="Graphic Design"
              link="/graphic-design"
              image={{
                mobile: graphicDesignMobile,
                tablet: graphicDesignTablet,
                desktop: graphicDesignDesktop,
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
