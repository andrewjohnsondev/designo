import Hero from '../Hero';
import { Section } from '../../shared/Section';
import { Container } from '../../shared/Container';
import Cta from '../../shared/Cta';
import Experiences from './Experiences';
import Projects from '../../shared/Projects/Projects';

function index() {
  return (
    <>
      <Hero />
      <Section>
        <Container>
          <Projects />
        </Container>
      </Section>
      <Section>
        <Container>
          <Experiences />
          <Cta />
        </Container>
      </Section>
    </>
  );
}
export default index;
