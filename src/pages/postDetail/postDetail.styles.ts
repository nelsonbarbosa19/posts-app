import styled from '@emotion/styled';

export const PostDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CommentsContainer = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  border-width: 1px;
  border-color: rgb(229 231 235);
`;

export const CommentsTitle = styled.h3`
  display: flex;
  justify-content: start;
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 30px;
  margin-bottom: 10px;
  margin-left: 20px;
`;
