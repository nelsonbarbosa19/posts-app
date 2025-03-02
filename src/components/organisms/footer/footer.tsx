import { useState } from 'react';
import { PageFooter } from './footer.styles';

export interface FooterProps {
  appName: string;
}

export const Footer: React.FC<FooterProps> = ({ appName }) => {
  const [year] = useState(new Date().getFullYear());

  return (
    <PageFooter id="page-footer">
      <p>
        <span>
          &copy;{year} {appName}
        </span>
        . All rights reserved.
      </p>
    </PageFooter>
  );
};
