import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #93D7ED;
  height: 45px;
  border-radius: 10px;
  border: none;
  color: #312e38;
  width: 100%;
  font-weight: 500;
  margin-top: 5px;
  transition: background-color 0.2s;

&:hover {
  color: #f1f1f1;
  background: ${shade(0.2 ,'#55b2d0')};
}
`