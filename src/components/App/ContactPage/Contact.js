import styled from 'styled-components';
import { useState } from 'react';
import ContactForm from './ContactForm';
import { FormSubmitted } from './FormSubmitted';
import pattern from '../../../assets/contact/desktop/bg-pattern-hero-desktop.svg';

const StyledContact = styled.article`
  position: relative;
  background-color: ${({ theme }) => theme.colors.primary.peach};
  background-image: url(${pattern});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: cente;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  color: white;
  padding: 4.5rem 2rem;

  p {
    font-weight: 400;
    line-height: 1.8;
    opacity: 0.9;
  }

  h2 {
    font-weight: 500;
  }

  div {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-inline: 2rem;
    border-radius: 15px;
    button {
      align-self: end;
    }
    div {
      text-align: left;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 69rem;
    margin-inline: auto;
    flex-direction: row;
    align-items: center;
    padding: 3.5rem 6rem;

    & > * {
      width: 100%;
    }
  }
`;

function Contact() {
  const [animate, setAnimate] = useState(false);
  return (
    <StyledContact pattern={pattern}>
      <div>
        <h2 className="text-xl">Contact Us</h2>
        <p>
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </p>
      </div>
      <ContactForm setAnimate={setAnimate} />
      <FormSubmitted animate={animate}>
        <p>Message Sent!</p>
      </FormSubmitted>
    </StyledContact>
  );
}
export default Contact;
