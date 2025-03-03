export interface InsertPostProps {
  handleNewPost: (newPostTitle: string, newPostText: string) => void;
  isOpen: boolean;
  onClose: () => void;
}
