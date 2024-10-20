import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #f5f5eb;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 300px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #B3907A;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #C1B6A4;
  }
`;

export const WelcomeMessage = styled.p`
  margin: 20px 0;
  font-size: 18px;
  text-align: center;
`;
