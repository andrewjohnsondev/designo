import { Form, Field } from 'react-final-form';
import { useNavigate } from 'react-router-dom';
import wait from 'waait';
import styled from 'styled-components';
import { useTheme } from 'styled-components';
import { StyledButton } from '../../shared/Button';
import { useEffect } from 'react';
import errorIcon from '../../../assets/contact/desktop/icon-error.svg';

const Input = styled.input`
  background-color: transparent;
  border: none;

  border-bottom: solid rgba(255, 255, 255, 0.5) 1px;
  padding: 1em;
  color: white;
  &:focus-visible {
    border-bottom: solid rgba(255, 255, 255, 1) 3px;
    outline: none;
  }
  &::placeholder {
    color: white;
    opacity: 0.8;
  }
`;
const TextArea = styled.textarea`
  background-color: transparent;
  border: none;
  border-bottom: solid rgba(255, 255, 255, 0.5) 1px;
  color: white;
  padding: 1rem;

  &:focus-visible {
    border-bottom: solid rgba(255, 255, 255, 1) 3px;
    outline: none;
  }
  &::placeholder {
    color: white;
    opacity: 0.8;
  }
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;

  .inputWrapper {
    position: relative;
  }

  .text-area .error {
    top: 2rem;
    transform: translateY(-1rem);
  }

  .error {
    position: absolute;
    display: flex;
    align-items: center;
    gap: 1rem;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    font-style: italic;
  }

  button {
    align-self: center;
    letter-spacing: 1px;
    padding-inline: 2.5em;
    margin-top: 2.5rem;
  }
`;

function ContactForm({ setAnimate }) {
  const theme = useTheme();
  const navigate = useNavigate();
  useEffect(() => {
    Window.scrollTop = 0;
  });
  const renderError = (err) => {
    return (
      <span className="error">
        {err} <img alt="" src={errorIcon} />
      </span>
    );
  };
  const onFormSubmit = async (values) => {
    console.log(values);
    setAnimate(true);
    await wait(1000);
    navigate('/');
  };
  return (
    <Form
      onSubmit={(values, form, callback) => {
        onFormSubmit(values);
        form.restart();
      }}
      validate={(values) => {
        const errorMsg = "Can't be empty";
        const errors = {};
        if (!values.name) {
          errors.name = errorMsg;
        }
        if (!values.email) {
          errors.email = errorMsg;
        }
        if (!values.phone) {
          errors.phone = errorMsg;
        }
        if (!values.message) {
          errors.message = errorMsg;
        }
        return errors;
      }}
    >
      {({ handleSubmit, reset, meta }) => (
        <StyledForm
          onSubmit={(event) => {
            handleSubmit(event);
          }}
        >
          <Field name="name" type="text">
            {({ input, meta }) => (
              <div className="inputWrapper">
                <Input {...input} placeholder="Name" />
                {meta.error && meta.touched && renderError(meta.error)}
              </div>
            )}
          </Field>
          <Field name="email" type="text">
            {({ input, meta }) => (
              <div className="inputWrapper">
                <Input {...input} placeholder="Email Address" />
                {meta.error && meta.touched && renderError(meta.error)}
              </div>
            )}
          </Field>
          <Field name="phone" type="text">
            {({ input, meta, afterSubmit }) => (
              <div className="inputWrapper">
                <Input
                  {...input}
                  afterSubmit={() => console.log('success')}
                  placeholder="Phone"
                />
                {meta.error && meta.touched && renderError(meta.error)}
              </div>
            )}
          </Field>
          <Field name="message" type="text">
            {({ input, meta }) => (
              <div className="inputWrapper text-area">
                <TextArea {...input} placeholder="Your Message" rows="4" />
                {meta.error && meta.touched && renderError(meta.error)}
              </div>
            )}
          </Field>
          <StyledButton
            type="submit"
            background={theme.colors.primary.white}
            color={theme.colors.primary.black}
            hover={{
              background: theme.colors.secondary.lightPeach,
              color: theme.colors.primary.white,
            }}
          >
            Submit
          </StyledButton>
        </StyledForm>
      )}
    </Form>
  );
}
export default ContactForm;
