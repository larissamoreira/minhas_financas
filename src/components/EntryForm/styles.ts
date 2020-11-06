import styled from 'styled-components';
import { Form as Formik } from 'formik';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  height: 108%;
  z-index: 2;

  svg.close-icon {
    position: absolute;
    top: 7px;
    right: 6px;
    cursor: pointer;
  }
`;

export const Content = styled.div`
  width: 500px;
  height: 600px;
  position: fixed;
  background: #f1f1f1;
  padding: 20px 15px;
  border-radius: 8px;

  h1 {
    color: #321fcc;
    font-size: 24px;
    margin-bottom: 12px;
    text-align: center;
  }

  h2 {
    color: #f1f1f1;
    font-size: 18px;
    margin-bottom: 12px;
  }
`;

export const Form = styled(Formik)`
  border-radius: 6px;
  padding: 20px 30px;

  h2 {
    font-size: 24px;
    color: #f1f1f1;
    margin-bottom: 12px;
  }
`;

export const InfoBlock = styled.div`
  color: #f1f1f1;
  margin-bottom: 20px;
  display: grid;
`;
