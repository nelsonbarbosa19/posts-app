import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const PageHeader = styled.header`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: white;
  color: black;
  min-height: 66px;
  border-bottom: 1px solid #e0e0e0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 2rem;
    font-weight: 600;
  }
`;

export const HeaderLeft = styled.nav`
  display: flex;
  justify-content: flex-start;
  gap: 1rem; /* Adds space between the links */

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const HeaderCenter = styled.div`
  display: flex;
  justify-content: stretch;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const HeaderRight = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const HeaderLink = styled(Link)`
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;

  color: ${(props) => props.theme.colors.neutral.black};
  &:hover {
    color: ${(props) => props.theme.colors.neutral.gray[500]};
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;
