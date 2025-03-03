import React from 'react';
import ReactModal from 'react-modal';
import { InsertPostProps } from './insertPost.types';
import './modalStyles.css';
import {
  ErrorMessage,
  NewPostButton,
  NewPostContainer,
  NewPostForm,
  NewPostTextArea,
  NewPostTitleInput,
  CancelButton,
  ButtonContainer,
} from './insertPost.styles';
import { useInsertPost } from './insertPost.hook';

export const InsertPost: React.FC<InsertPostProps> = ({
  handleNewPost,
  isOpen,
  onClose,
}) => {
  const { onSubmit, handleSubmit, register, errors } = useInsertPost(
    handleNewPost,
    onClose
  );

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="ReactModal__Content"
      overlayClassName="ReactModal__Overlay"
      contentLabel="Insert Post Modal"
    >
      <h1>Insert Post</h1>
      <NewPostForm onSubmit={handleSubmit(onSubmit)}>
        <NewPostContainer>
          <NewPostTitleInput
            {...register('title')}
            id="new-post-title"
            type="text"
            placeholder="Post title..."
          />
          {errors.title && <ErrorMessage>{errors.title.message}</ErrorMessage>}
          <NewPostTextArea
            {...register('text')}
            id="new-post-text"
            placeholder="Post content..."
          />
          {errors.text && <ErrorMessage>{errors.text.message}</ErrorMessage>}
        </NewPostContainer>
        <ButtonContainer>
          <NewPostButton type="submit">Add Post</NewPostButton>
          <CancelButton type="button" onClick={onClose}>
            Cancel
          </CancelButton>
        </ButtonContainer>
      </NewPostForm>
    </ReactModal>
  );
};
