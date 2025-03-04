import styled from '@emotion/styled';
import { Button } from '../../components/atoms';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const PostsTitle = styled.h3`
  display: flex;
  justify-content: start;
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 30px;
  margin-bottom: 10px;
  margin-left: 20px;
`;

export const AddPostButton = styled(Button)`
  align-self: flex-end;
`;

export const PostsHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 30px;
  margin-top: 20px;
`;
