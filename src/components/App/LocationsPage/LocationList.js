import Location from './Location';
import canadaLocationImageTablet from '../../../assets/locations/tablet/image-map-canada.png';
import canadaLocationImageDesktop from '../../../assets/locations/desktop/image-map-canada.png';
import australiaLocationImageTablet from '../../../assets/locations/tablet/image-map-australia.png';
import australiaLocationImageDesktop from '../../../assets/locations/desktop/image-map-australia.png';
import ukLocationImageTablet from '../../../assets/locations/tablet/image-map-uk.png';
import ukLocationImageDesktop from '../../../assets/locations/desktop/image-map-united-kingdom.png';
import { Section } from '../../shared/Section';
import Cta from '../../shared/Cta';
import styled from 'styled-components';

const LocationGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 7.5rem;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    gap: 2rem;
  }
`;
function LocationList() {
  const imageList = {
    canada: {
      tablet: canadaLocationImageTablet,
      desktop: canadaLocationImageDesktop,
    },
    australia: {
      tablet: australiaLocationImageTablet,
      desktop: australiaLocationImageDesktop,
    },
    uk: {
      tablet: ukLocationImageTablet,
      desktop: ukLocationImageDesktop,
    },
  };

  const contactInformation = {
    canada: {
      street: '3886 Wellington Street',
      city: 'Toronto, Ontario M9C 3J5',
      phone: '+1 253-863-8967',
      email: 'contact@designo.co',
    },
    australia: {
      street: '19 Balonne Street',
      city: 'New South Wales 2443',
      phone: '(02) 6720 9092',
      email: 'contact@designo.au',
    },
    uk: {
      street: '13  Colorado Way',
      city: 'Rhyd-y-fro SA8 9GA',
      phone: '078 3115 1400',
      email: 'contact@designo.uk',
    },
  };
  return (
    <>
      <LocationGrid>
        <Location
          isContentLeft="true"
          image={imageList.canada}
          title="Canada"
          officeTitle="Designo Central Office"
          office={[
            contactInformation.canada.street,
            contactInformation.canada.city,
          ]}
          contact={[
            contactInformation.canada.phone,
            contactInformation.canada.email,
          ]}
        />
        <Location
          isContentLeft="false"
          image={imageList.australia}
          title="Australia"
          officeTitle="Designo AU Office"
          office={[
            contactInformation.australia.street,
            contactInformation.australia.city,
          ]}
          contact={[
            contactInformation.australia.phone,
            contactInformation.australia.email,
          ]}
        />
        <Location
          isContentLeft="true"
          image={imageList.uk}
          officeTitle="Designo UK Office"
          title="United Kingdom"
          office={[contactInformation.uk.street, contactInformation.uk.city]}
          contact={[contactInformation.uk.phone, contactInformation.uk.email]}
        />
      </LocationGrid>
      <Section>
        <Cta />
      </Section>
    </>
  );
}
export default LocationList;
