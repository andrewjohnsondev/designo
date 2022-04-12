import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import webDesignMobile from '../../../assets/home/mobile/image-web-design.jpg';
import appDesignMobile from '../../../assets/home/mobile/image-app-design.jpg';
import graphicDesignMobile from '../../../assets/home/mobile/image-graphic-design.jpg';
import webDesignTablet from '../../../assets/home/tablet/image-web-design.jpg';
import appDesignTablet from '../../../assets/home/tablet/image-app-design.jpg';
import graphicDesignTablet from '../../../assets/home/tablet/image-graphic-design.jpg';
import webDesignDesktop from '../../../assets/home/desktop/image-web-design-large.jpg';
import webDesignDesktopSmall from '../../../assets/home/desktop/image-web-design-small.jpg';
import appDesignDesktop from '../../../assets/home/desktop/image-app-design.jpg';
import graphicDesignDesktop from '../../../assets/home/desktop/image-graphic-design.jpg';

const ProjectsLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 15rem;
  gap: 1.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-auto-rows: 12.5rem;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-auto-rows: 19.25rem;
    grid-template-columns: repeat(2, 1fr);

    & > *:first-child {
      grid-row: 1 / span 2;
    }
  }
`;
function Projects() {
  return (
    <ProjectsLayout>
      <ProjectCard
        title="Web Design"
        link="/web-design"
        image={{
          mobile: webDesignMobile,
          tablet: webDesignTablet,
          desktop: webDesignDesktop,
          deskSmall: webDesignDesktopSmall,
        }}
      />
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
    </ProjectsLayout>
  );
}
export default Projects;
