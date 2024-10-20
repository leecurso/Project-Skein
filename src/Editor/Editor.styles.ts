import styled from 'styled-components';

export const Container = styled.div<{ noteColor: string }>`
  background-color: ${({ noteColor }) => noteColor};
  padding: 10px;
  border-radius: 8px;
  .ql-editor {
    min-height: 200px;
  }
`;