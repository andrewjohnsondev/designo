import Contact from './Contact';
import { Section } from '../../shared/Section';
import LocationLinks from '../../shared/LocationLinks';
import { Container } from '../../shared/Container';
import { useEffect } from 'react';

import styled from 'styled-components';
const ContactLocationLayout = styled.section`
  padding-block: 3.75rem;

  @media (min-width: 55em) {
    padding-block: 10rem;
  }
`;

function index() {
  return (
    <>
      <Contact />
      <ContactLocationLayout>
        <Container>
          <LocationLinks />
        </Container>
      </ContactLocationLayout>
    </>
  );
}
export default index;
