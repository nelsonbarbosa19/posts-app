import { UserItemServiceOutput } from '../../../services';
import { PostItemType } from '../postItem';

export const usePostList = (
  users: UserItemServiceOutput[],
  postsList: PostItemType[]
) => {
  const posts = postsList.map((post) => {
    return {
      ...post,
      user: users.find((user) => user.id === post.userId),
    };
  });

  return { posts };
};
