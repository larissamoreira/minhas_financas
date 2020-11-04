import styled from 'styled-components';
import { Form } from 'formik';

export const Container = styled.div`
  height: 400px;
  width: 40%;
  margin: auto;
  background-color: #e2e2e2;
  padding: 60px 20px;
  border-radius: 20px;
  box-shadow: 6px 10px 31px 0px rgba(153,153,153,0.97);

  @media (max-width: 768px) {
    width: 90%;
  }
`

export const Title = styled.h1`
  margin: 0;
  padding-bottom: 30px;
  text-align: center;
`

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  height: 500px;
  margin: 0 10px;
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`

export const Span = styled.span`
  font-size: 11px;
  color: red;
`
