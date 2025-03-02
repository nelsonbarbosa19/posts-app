import { Link } from 'react-router-dom';
import {
  NotFoundContainer,
  NotFoundTitle,
  NotFoundMessage,
  NotFoundLink,
} from './notFound.styles';

export const NotFound: React.FC = () => {
  return (
    <NotFoundContainer>
      <NotFoundTitle>404 - Not Found</NotFoundTitle>
      <NotFoundMessage>This page does not exist!</NotFoundMessage>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <NotFoundLink as="span">Go back to the homepage</NotFoundLink>
      </Link>
    </NotFoundContainer>
  );
};
