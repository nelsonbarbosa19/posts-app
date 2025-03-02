import React, { useMemo } from 'react';
import { PostItem } from '../postItem';
import { PostsListProps } from './postsList.types';
import { PostsContainer } from './postsList.styles';

const PostsListComponent: React.FC<PostsListProps> = ({
  postsList,
  onSelectPost,
}) => {
  const memoizedPosts = useMemo(() => {
    return postsList.map((post) => (
      <PostItem
        key={post.id}
        post={post}
        appearance="selectable"
        onSelectPost={onSelectPost}
      />
    ));
  }, [postsList, onSelectPost]);

  return (
    <PostsContainer id={`post-list`}>
      {postsList.length === 0 ? <p>No posts available</p> : memoizedPosts}
    </PostsContainer>
  );
};

export const PostsList = React.memo(PostsListComponent);
