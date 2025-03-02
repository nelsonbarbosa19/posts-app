import { Outlet } from 'react-router-dom';
import { Footer } from '../../organisms/footer';
import { Header } from '../../organisms/header/header';
import { Page, PageBody } from './pageBase.styles';

export const PageBase: React.FC = () => {
  return (
    <Page id="page">
      <Header appTitle="Posts APP" />
      <PageBody id="page-body">
        <Outlet />
      </PageBody>
      <Footer appName="Posts APP" />
    </Page>
  );
};
