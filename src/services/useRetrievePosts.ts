import { PostItemServiceOutput } from './types';
import { useRetrieve } from '../utils';

export const useRetrievePosts = () => {
  const { retrieve } = useRetrieve<{ postId: number }, PostItemServiceOutput[]>(
    {
      endpoint: '/posts',
    }
  );

  return { retrieve };
};
