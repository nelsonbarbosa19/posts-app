import { PrimaryButton } from './button.styles';

export interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: React.FC<PrimaryButtonProps> = ({
  children,
  ...props
}) => {
  return <PrimaryButton {...props}>{children}</PrimaryButton>;
};
