import { useCallback, useEffect, useState } from 'react';
import { useRetrievePosts, useRetrieveUsers } from '../../services';
import { PostItemType } from '../../components';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../../store';
import { PostItemServiceOutput, UserItemServiceOutput } from '../../services';

export const useHome = () => {
  const navigate = useNavigate();
  const { retrieve: retrieveUsers } = useRetrieveUsers();
  const { retrieve: retrievePosts } = useRetrievePosts();

  const { posts, users, setPosts, setUsers } = useAppStore();

  const [postsList, setPostsList] = useState<PostItemType[] | null>(null);

  /**
   * Retrieve users and posts data, and append user data to each post object.
   * The services data are static, so we can store them in the store.
   * The services are called only once, and the data is stored in the store.
   * This is done to avoid fetching data from the server, if it's already available in the store.
   */
  useEffect(() => {
    // Call services to fetch the home page data.
    const fetchHomePageData = async () => {
      // Call retrieveUsers to get users data
      let userData: UserItemServiceOutput[] = [];

      // If users data is already available in the store, use it.
      if (users?.length > 0) {
        userData = users;
      } else {
        // Call retrieveUsers to get users data.
        const userResponse = await retrieveUsers();

        console.log('users service response: ' + JSON.stringify(userResponse));

        // If the users data is successfully retrieved, set the users in the store.
        if (userResponse.success && userResponse.data) {
          setUsers(userResponse.data);
          userData = userResponse.data;
        }
      }

      // Call retrievePosts to get posts data.
      let postsData: PostItemServiceOutput[] = [];

      // If posts data is already available in the store, use it.
      if (posts?.length > 0) {
        postsData = posts;
      } else {
        // Call retrievePosts to get posts data.
        const postsResponse = await retrievePosts();

        console.log('posts service response: ' + JSON.stringify(postsResponse));

        // If the posts data is successfully retrieved, set the posts in the store.
        if (postsResponse.success && postsResponse.data) {
          setPosts(postsResponse.data);
          postsData = postsResponse.data;
        }
      }

      // Add user to each post.
      const postsWithUsers = postsData.map((post) => {
        return {
          ...post,
          user: userData.find((user) => user.id === post.userId),
        };
      });

      // Set the posts list in the store.
      setPostsList(postsWithUsers);
    };

    // Call the async function
    fetchHomePageData();
  }, []);

  /**
   * Retrieve comments for a post.
   */
  const onSelectPost = useCallback(
    (post: PostItemType) => {
      console.log('onSelectPost: ' + JSON.stringify(post));
      navigate(`/post/${post.id}`);
    },
    [navigate]
  );

  return { postsList, onSelectPost, setPostsList, users, posts, setPosts };
};
