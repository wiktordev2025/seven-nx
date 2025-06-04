import styled from 'styled-components';

export const StyledApp = styled.div`
  background-color: lightseagreen;
  color: #333;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 20px;
`;

export const StyledButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  background-color: #fff;
  border: 1px solid #333;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;
