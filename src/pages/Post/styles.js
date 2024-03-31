import styled from 'styled-components';
export const Container = styled.article`
  background: ${props => props.theme.postBackgroundColor};
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.spacing.medium};
  border-radius: ${props => props.theme.borderRadius};
  margin-top: ${props => props.theme.marginTop.large};
  h2 {
    margin: ${props => props.theme.margin};
  }

  small {
    opacity: ${props => props.theme.opacity};
  }

  & + article {
    margin-top: ${props => props.theme.marginTop.small};
  }
`;
