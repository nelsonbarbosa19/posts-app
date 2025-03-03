import { CommentItemServiceOutput } from './types';
import { useRetrieve } from '../utils';

export const useRetrieveComments = () => {
  const { retrieve } = useRetrieve<
    { postId: number },
    CommentItemServiceOutput[]
  >({
    method: 'GET',
    endpoint: '/comments',
  });

  return { retrieve };
};
