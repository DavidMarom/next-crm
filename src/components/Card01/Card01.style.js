import styled from 'styled-components';

const DARK = '#555555';
const LIGHT = '#eeeeee';

export const Container = styled.div`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  border-radius: ${({ borderRadius }) => borderRadius}px;
  background-color: ${({ background }) => background};
  padding: 10px;
  border-radius: 10px;
  margin-top: 10px;
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: space-between;
  overflow: hidden;

`;

