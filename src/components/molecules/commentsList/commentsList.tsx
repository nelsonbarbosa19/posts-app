import React, { useMemo } from 'react';
import { CommentsListProps } from './commentsList.types';
import { CommentItem } from '../commentItem';
import { CommentsContainer } from './commentsList.styles';

const CommentsListComponent: React.FC<CommentsListProps> = ({ comments }) => {
  const memoizedComments = useMemo(() => {
    return comments?.map((comment) => (
      <CommentItem key={comment.id} comment={comment} />
    ));
  }, [comments]);

  return (
    <CommentsContainer>
      {comments.length === 0 ? <p>No comments available</p> : memoizedComments}
    </CommentsContainer>
  );
};

export const CommentsList = React.memo(CommentsListComponent);
