import styled from '@emotion/styled';

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.theme.spacing.xl};
  text-align: center;
`;

export const NotFoundTitle = styled.h1`
  color: ${(props) => props.theme.colors.text.primary};
  border-radius: ${(props) => props.theme.colors.text.primary};
  margin-bottom: ${(props) => props.theme.spacing.md};
  font-size: ${(props) => props.theme.typography.fontSize.xxl};
  font-weight: ${(props) => props.theme.typography.fontWeight.semibold};
`;

export const NotFoundMessage = styled.p`
  margin-bottom: ${(props) => props.theme.spacing.lg};
  max-width: 600px;
  line-height: ${(props) => props.theme.typography.lineHeight.relaxed};
  color: ${(props) => props.theme.colors.text.secondary};
`;

export const NotFoundLink = styled.a`
  color: ${(props) => props.theme.colors.primary.main};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: ${(props) => props.theme.colors.primary.dark};
  }
`;
