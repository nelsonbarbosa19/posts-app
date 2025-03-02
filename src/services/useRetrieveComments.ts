import { CommentItemServiceOutput } from './types';
import { useRetrieve } from '../utils';

export const useRetrieveComments = () => {
  const { retrieve } = useRetrieve<
    { postId: number },
    CommentItemServiceOutput[]
  >({
    endpoint: '/comments',
  });

  return { retrieve };
};
