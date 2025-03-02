import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PostItemType } from '../../components';
import { PostItemServiceOutput, useRetrieveComments } from '../../services';
import { useAppStore } from '../../store';

export const usePostDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the post ID
  const { retrieve: retrieveComments } = useRetrieveComments();

  const { posts, users } = useAppStore();

  const [selectedPost, setSelectedPost] = useState<PostItemType | null>(null);

  /**
   * If the post ID is missing or there are no posts, navigate to the error page.
   * Otherwise, set the selected post.
   */
  useEffect(() => {
    if (!id || !posts.length) {
      navigate('/error', {
        replace: true,
        state: { errorText: !id ? 'Post ID is missing' : 'No posts available' },
      });
      return;
    }

    const postId = Number(id);
    const post = posts.find(
      (post: PostItemServiceOutput) => post.id === postId
    );

    if (!post) {
      navigate('/error', {
        replace: true,
        state: { errorText: `Post with ID ${id} not found` },
      });
      return;
    }

    // Add the user data for the selected post.
    const userPost = users.find((user) => user.id === post.userId);
    const postWithUser = { ...post, user: userPost };

    // Retrieve comments for the selected post.
    retrieveComments({ postId: post.id }).then((response) => {
      console.log('posts service response: ' + JSON.stringify(response));

      /* If the response is successful and there are comments, filter the comments by post ID,
      and set the selected post with the comments. */
      if (response.success && response.data) {
        const comments = response.data;

        const postComments = comments.filter(
          (comment) => comment.postId === post.id
        );

        setSelectedPost({ ...postWithUser, comments: postComments });
      }
    });
  }, []);

  return { selectedPost };
};
