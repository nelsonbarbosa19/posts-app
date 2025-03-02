import React from 'react';
import {
  PageHeader,
  HeaderLeft,
  HeaderCenter,
  HeaderRight,
  HeaderLink,
} from './header.styles';

export interface HeaderProps {
  appTitle: string;
}

export const Header: React.FC<HeaderProps> = ({ appTitle }) => {
  return (
    <PageHeader id="page-header">
      <HeaderLeft>
        <HeaderLink to="/">Home</HeaderLink>
        <HeaderLink to="/about">About</HeaderLink>
      </HeaderLeft>

      <HeaderCenter>
        <h1>{appTitle}</h1>
      </HeaderCenter>

      <HeaderRight></HeaderRight>
    </PageHeader>
  );
};
