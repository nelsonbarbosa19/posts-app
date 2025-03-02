import { create } from 'zustand/react';
import { persist, createJSONStorage } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { PostItemServiceOutput, UserItemServiceOutput } from '../../services';

interface AppState {
  // State
  posts: PostItemServiceOutput[];
  users: UserItemServiceOutput[];
  // isLoading: boolean;
  // error: string | null;
  // Actions
  setPosts: (posts: PostItemServiceOutput[]) => void;
  setUsers: (users: UserItemServiceOutput[]) => void;
  // setLoading: (isLoading: boolean) => void;
  // setError: (error: string | null) => void;
  // Selectors
  getPostById: (id: number) => PostItemServiceOutput | undefined;
  getUserById: (id: number) => UserItemServiceOutput | undefined;
  getPostsByUser: (userId: number) => PostItemServiceOutput[];
}

export const useAppStore = create<AppState>()(
  persist(
    immer((set, get) => ({
      // Initial state
      posts: [],
      users: [],

      // Actions
      setPosts: (posts: PostItemServiceOutput[]) =>
        set((state) => {
          state.posts = posts;
        }),
      setUsers: (users: UserItemServiceOutput[]) =>
        set((state) => {
          state.users = users;
        }),

      // Selectors
      getPostById: (id: number) => get().posts.find((post) => post.id === id),
      getUserById: (id: number) => get().users.find((user) => user.id === id),
      getPostsByUser: (userId: number) =>
        get().posts.filter((post) => post.userId === userId),
    })),
    {
      name: 'app-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ posts: state.posts, users: state.users }),
    }
  )
);
