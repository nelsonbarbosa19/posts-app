import { PostItemServiceInput, PostItemServiceOutput } from './types';
import { useRetrieve } from '../utils';

export const useRetrieveSetPost = () => {
  const { retrieve } = useRetrieve<PostItemServiceInput, PostItemServiceOutput>(
    {
      method: 'POST',
      endpoint: '/posts',
    }
  );

  return { retrieve };
};
