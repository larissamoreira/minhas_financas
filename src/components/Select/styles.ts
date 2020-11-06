import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  & + {
    margin-top: 1.4rem;
  }
`;

export const TitleOption = styled.option`
  font-size: 1.4rem;
`;

export const List = styled.select`
  padding: 10px;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background: #fafafc;
  border: 1px solid #e6e6f0;

  font-family: Poppins;
  font-weight: normal;
  font-size: 16px;
  line-height: 15px;
  color: #9c98a6;
`;
