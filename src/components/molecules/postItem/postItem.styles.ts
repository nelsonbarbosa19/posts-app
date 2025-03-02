import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { PostItemAppearance } from './postItem';

export const PostCard = styled.div<{ appearance: PostItemAppearance }>`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  border-width: 1px;
  border-color: rgb(229 231 235);
  justify-content: start;
  text-align: left;

  &:hover {
    ${(props) => {
      switch (props.appearance) {
        case 'static':
          return css`
            transform: none;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          `;

        case 'selectable':
        default:
          return css`
            transform: translateY(-5px);
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
          `;
      }
    }}
  }
`;

export const UserName = styled.h2`
  display: flex;
  margin: 0 0 10px;
  color: #007bff;
  font-size: 1.5rem;
`;

export const PostTitle = styled.h3`
  display: flex;
`;

export const PostBody = styled.p`
  display: flex;
  flex: 1;
  margin: 0 0 15px;
  color: #555;
  line-height: 1.5;
`;

export const ViewButton = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s;

  &:hover {
    background: #0056b3;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
