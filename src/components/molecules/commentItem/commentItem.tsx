import { CommentItemServiceOutput } from '../../../services';
import {
  CommentContainer,
  CommentName,
  CommentBody,
} from './commentItem.styles';
export type CommentItemType = CommentItemServiceOutput;

export interface CommentItemProps {
  comment: CommentItemServiceOutput;
}

export const CommentItem: React.FC<CommentItemProps> = ({ comment }) => {
  return (
    <CommentContainer key={comment.id}>
      {/* <h2>{comment.user?.name}</h2> */}
      <CommentName>
        {comment.name}
        <span>:</span>
      </CommentName>
      <CommentBody>{comment.body}</CommentBody>
    </CommentContainer>
  );
};
