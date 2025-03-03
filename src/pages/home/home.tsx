import { useCallback, useState } from 'react';
import { PostItemType, PostsList } from '../../components';
import { useHome } from './home.hook';
import { HomeContainer, PostsTitle, AddPostButton } from './home.styles';
import { InsertPost } from '../../components/organisms/modals/insertPost';
import {
  PostItemServiceInput,
  PostItemServiceOutput,
  useRetrieveSetPost,
} from '../../services';

export const Home: React.FC = () => {
  const { postsList, onSelectPost, setPostsList, users, setPosts, posts } =
    useHome();
  const [isOpenNewPostModal, setIsOpenNewPostModal] = useState(false);

  const { retrieve } = useRetrieveSetPost();

  const handleNewPost = useCallback(
    (newPostTitle: string, newPostText: string) => {
      console.log('newPostTitle', newPostTitle);
      console.log('newPostText', newPostText);

      const newPost: PostItemServiceInput = {
        title: newPostTitle,
        body: newPostText,
        userId: 1,
      };
      console.log('newPost', newPost);

      retrieve(newPost).then((res) => {
        if (!res.data || !res.success) {
          return;
        }

        const post: PostItemType = {
          ...newPost,
          id: res.data?.id ?? 0,
          user: users.find((user) => user.id === newPost.userId),
        };

        setPostsList((prev) => {
          if (!prev) {
            return [post];
          }
          return [...[post].concat(prev)];
        });

        const postStore: PostItemServiceOutput = {
          ...newPost,
          id: res.data?.id ?? 0,
        };

        setPosts([postStore].concat(posts));

        setIsOpenNewPostModal(false);
      });
    },
    [retrieve, setPostsList, users]
  );

  return postsList ? (
    <HomeContainer>
      <PostsTitle>Posts</PostsTitle>
      <AddPostButton onClick={() => setIsOpenNewPostModal(true)}>
        Add Post
      </AddPostButton>
      <InsertPost
        handleNewPost={handleNewPost}
        isOpen={isOpenNewPostModal}
        onClose={() => setIsOpenNewPostModal(false)}
      />
      <PostsList postsList={postsList} onSelectPost={onSelectPost} />
    </HomeContainer>
  ) : (
    <></>
  );
};
