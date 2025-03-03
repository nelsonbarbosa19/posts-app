import { usePostDetail } from './postDetail.hook';
import { CommentsList, PostItem } from '../../components';
import { PostDetailContainer, CommentsTitle } from './postDetail.styles';

export const PostDetail: React.FC = () => {
  const { selectedPost } = usePostDetail();

  return (
    <PostDetailContainer id="post-detail-container">
      {selectedPost && <PostItem post={selectedPost} appearance="static" />}

      <CommentsTitle>Comments</CommentsTitle>
      {selectedPost?.comments && (
        <CommentsList comments={selectedPost.comments} />
      )}
    </PostDetailContainer>
  );
};
