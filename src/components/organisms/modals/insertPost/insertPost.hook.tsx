import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import ReactModal from 'react-modal';
import { z } from 'zod';

const PostSchema = z.object({
  title: z
    .string()
    .min(1, 'Post name is required')
    .max(100, 'Post name must be less than 100 characters'),
  text: z
    .string()
    .min(1, 'Post text is required')
    .max(300, 'Post text must be less than 300 characters'),
});

type PostFormData = z.infer<typeof PostSchema>;

export const useInsertPost = (
  handleNewPost: (title: string, text: string) => void,
  onClose: () => void
) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PostFormData>({
    resolver: zodResolver(PostSchema),
  });

  const onSubmit = useCallback(
    (data: PostFormData) => {
      handleNewPost(data.title, data.text);
      reset();
      onClose();
    },
    [handleNewPost, onClose, reset]
  );

  useEffect(() => {
    ReactModal.setAppElement('#root');
  }, []);

  return { handleSubmit, onSubmit, register, errors };
};
