import styled from '@emotion/styled';
import { Button } from '../../../atoms';

export const NewPostForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const NewPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const NewPostTitleInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid rgb(229 231 235);
  border-radius: 5px;
  background-color: rgb(249 250 251);
  font-size: 14px;

  &::placeholder {
    font-size: 14px;
  }
`;

export const NewPostTextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid rgb(229 231 235);
  border-radius: 5px;
  resize: vertical;
  background-color: rgb(249 250 251);
  height: 80px;

  &::placeholder {
    font-size: 14px;
  }
`;

export const ErrorMessage = styled.span`
  color: #dc2626;
  font-size: 12px;
  margin-top: -5px;
  align-self: flex-start;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`;

export const NewPostButton = styled(Button)`
  /* padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100px; */
  align-self: flex-end;
`;

export const CancelButton = styled(Button)`
  align-self: flex-start;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  position: relative;
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20%;
  margin-left: 20%;
  margin-right: 20%;
  margin-bottom: 20%;
  width: 100%;
  max-width: 1000px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const ModalButton = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 20px;
  transition: background 0.2s;

  &:hover {
    background: #0056b3;
  }
`;
