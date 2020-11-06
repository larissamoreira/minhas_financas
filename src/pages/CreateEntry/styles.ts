import styled from 'styled-components';
import { Form } from 'formik';

export const Container = styled.div`
  width: 100%;
  max-width: 736px;
  margin: 0 auto;
  padding: 40px 20px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Title = styled.h1`
  margin: 0;
  text-align: center;
  font-weight: 500;
  color: #32264d;
`;

export const Subtitle = styled.h3`
  text-align: center;
  color: #6a6180;
  padding-bottom: 15px;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  height: 500px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;
