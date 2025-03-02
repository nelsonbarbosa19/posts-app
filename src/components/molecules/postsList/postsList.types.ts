import { PostItemType } from '../postItem';

export interface PostsListProps {
  postsList: PostItemType[];
  onSelectPost: (post: PostItemType) => void;
}
