import styled from 'styled-components';
import { Form } from 'formik';

export const Container = styled.div`
  width: 100%;
  max-width: 736px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const Title = styled.h1`
  margin: 0;
  padding-bottom: 30px;
  text-align: center;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const RegisterLink = styled.div`
  margin-top: 15px;
  color: #6a6180;
`;
