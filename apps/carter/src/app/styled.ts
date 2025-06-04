import styled from 'styled-components';
import { tokens } from '@seven-nx/shared-styles';

export const StyledApp = styled.div`
  background-color: ${tokens.colors.primary};
  color: ${tokens.colors.textLight};
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 20px;

  button {
    padding: 8px 16px;
    font-size: 14px;
    font-weight: bold;
    background-color: ${tokens.colors.textLight};
    color: ${tokens.colors.primary};
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      background-color: #f0f0f0;
    }
  }
`;

export const StyledList = styled.ul`
  padding-left: 20px;
  list-style-type: disc;

  li {
    margin-bottom: 8px;
    font-size: 1rem;
  }
`;
