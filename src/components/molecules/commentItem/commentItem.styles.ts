import styled from '@emotion/styled';

export const CommentContainer = styled.div`
  text-align: left;
  background: ${(props) => props.theme.colors.background.paper};
  border-radius: ${(props) => props.theme.borders.radius.lg};
  padding: ${(props) => props.theme.spacing.md};
  margin-bottom: ${(props) => props.theme.spacing.sm};
  box-shadow: ${(props) => props.theme.shadows.sm};
`;

export const CommentName = styled.div`
  font-weight: ${(props) => props.theme.typography.fontWeight.semibold};
  color: ${(props) => props.theme.colors.text.primary};
`;

export const CommentBody = styled.p`
  color: ${(props) => props.theme.colors.text.secondary};
`;
