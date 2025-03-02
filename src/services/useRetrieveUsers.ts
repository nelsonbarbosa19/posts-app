import { UserItemServiceOutput } from './types';
import { useRetrieve } from '../utils';

export const useRetrieveUsers = () => {
  const { retrieve } = useRetrieve<undefined, UserItemServiceOutput[]>({
    endpoint: '/users',
  });

  return { retrieve };
};
