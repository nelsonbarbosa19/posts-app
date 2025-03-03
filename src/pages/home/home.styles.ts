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
  margin-right: 20px;
  margin-bottom: 20px;
`;
