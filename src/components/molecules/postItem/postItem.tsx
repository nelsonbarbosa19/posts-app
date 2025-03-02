import { CommentItemType } from '../commentItem';
import { UserItemServiceOutput } from '../../../services';
import {
  PostCard,
  UserName,
  PostTitle,
  PostBody,
  ButtonContainer,
} from './postItem.styles';
import { Button } from '../../atoms/button';

export interface PostItemType {
  userId: number;
  id: number;
  title: string;
  body: string;
  user?: UserItemServiceOutput;
  comments?: CommentItemType[];
}

export type PostItemAppearance = 'static' | 'selectable';

export interface PostItemProps {
  post: PostItemType;
  onSelectPost?: (post: PostItemType) => void;
  appearance: PostItemAppearance;
}

export const PostItem = ({ post, onSelectPost, appearance }: PostItemProps) => {
  return (
    <PostCard id={`post-item-${post.id}`} appearance={appearance}>
      <UserName>{post.user?.name}</UserName>
      <PostTitle>{post.title}</PostTitle>
      <PostBody>{post.body}</PostBody>
      {appearance === 'selectable' && onSelectPost && (
        <ButtonContainer>
          <Button onClick={() => onSelectPost(post)}>View comments</Button>
        </ButtonContainer>
      )}
    </PostCard>
  );
};
