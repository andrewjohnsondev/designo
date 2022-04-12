import Hero from '../../shared/Hero';
import { Section } from '../../shared/Section';
import { Split } from '../../shared/Split';

import CardList from '../../shared/Cards/CardList';
import Cta from '../../shared/Cta';
import ProjectCard from '../../shared/Projects/ProjectCard';

import appDesignMobile from '../../../assets/home/mobile/image-app-design.jpg';
import graphicDesignMobile from '../../../assets/home/mobile/image-graphic-design.jpg';
import appDesignTablet from '../../../assets/home/tablet/image-app-design.jpg';
import graphicDesignTablet from '../../../assets/home/tablet/image-graphic-design.jpg';
import appDesignDesktop from '../../../assets/home/desktop/image-app-design.jpg';
import graphicDesignDesktop from '../../../assets/home/desktop/image-graphic-design.jpg';
import expressImg from '../../../assets/web-design/desktop/image-express.jpg';
import transferImg from '../../../assets/web-design/desktop/image-transfer.jpg';
import photonImg from '../../../assets/web-design/desktop/image-photon.jpg';
import builderImg from '../../../assets/web-design/desktop/image-builder.jpg';
import blogrImg from '../../../assets/web-design/desktop/image-blogr.jpg';
import campImg from '../../../assets/web-design/desktop/image-camp.jpg';
import { ProjectLayout } from '../../shared/Projects/ProjectLayout';
import { Container } from '../../shared/Container';

function index() {
  const webDesignCardList = [
    {
      image: expressImg,
      title: 'express',
      description: 'A multi-carrier shipping website for ecommerce businesses',
    },
    {
      image: transferImg,
      title: 'transfer',
      description: 'A multi-carrier shipping website for ecommerce businesses',
    },
    {
      image: photonImg,
      title: 'photon',
      description:
        'A state-of-the-art music player with high-resolution audio and DSP effects',
    },
    {
      image: builderImg,
      title: 'builder',
      description:
        'Connects users with local contractors based on their location',
    },
    {
      image: blogrImg,
      title: 'blogr',
      description:
        'Blogr is a platform for creating an online blog or publication',
    },
    {
      image: campImg,
      title: 'camp',
      description:
        'Get expert training in coding, data, design, and digital marketing',
    },
  ];
  return (
    <>
      <Hero>
        <h2>Web Design</h2>
        <p>
          We build websites that serve as powerful marketing tools and bring
          memorable brand experiences.
        </p>
      </Hero>
      <Section>
        <CardList cards={webDesignCardList} />
      </Section>
      <Section>
        <Container>
          <ProjectLayout>
            <ProjectCard
              title="App Design"
              link="/app-design"
              image={{
                mobile: appDesignMobile,
                tablet: appDesignTablet,
                desktop: appDesignDesktop,
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
