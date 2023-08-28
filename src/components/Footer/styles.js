import styled from 'styled-components';

export const Container = styled.footer`
  background: ${props=>props.theme.navBackgroundColor};
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  border-radius: 10px;
  justify-content: space-between;
  margin-top:  ${props => props.theme.marginTop.medium};

  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }
`;
