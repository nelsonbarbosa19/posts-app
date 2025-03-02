import { PostsList } from '../../components';
import { useHome } from './home.hook';
import { HomeContainer } from './home.styles';

export const Home: React.FC = () => {
  const { postsList, onSelectPost } = useHome();

  return postsList ? (
    <HomeContainer>
      <PostsList postsList={postsList} onSelectPost={onSelectPost} />
    </HomeContainer>
  ) : (
    <></>
  );
};
