import React, {
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import { ScoutBar } from 'scoutbar';

import Navbar from '../Navbar';
import AppContext from '../Utils/context';
import { initGA, logPageView } from '../Utils/analytics';
import Cursor from '../Cursor';
import SkipToMain from '../A11y/skip-to-main';

import { BackLay, BodyStyling, Main } from './style';
import { actions } from './data';
import Head from 'next/head';
import Sidebar from '../Sidebar';

const Layout: React.FC<PropsWithChildren<{
  title?: string;
}>> = ({ children, title = 'Home' }) => {
  const { theme, loadTheme, show, setTheme } = useContext(AppContext);
  const [skew, setSkew] = useState(10);
  const logPage = () => {
    if (!(window as any).GA_INITIALIZED) {
      initGA();
      (window as any).GA_INITIALIZED = true;
    }
    logPageView();
  };

  useEffect(() => {
    logPage();
    loadTheme();
  }, [loadTheme, logPage]);

  return (
    <Main>
      <BodyStyling theme={theme} />
      <Head>
        <title>{`${title} | Sajeeb Das Shuvo`}</title>
        <meta
          name="msapplication-TileColor"
          content={`${theme ? '#000000' : '#FFFFFF'}`}
        />
        <meta name="theme-color" content={`${theme ? '#000000' : '#FFFFFF'}`} />
      </Head>
      <SkipToMain content="main-content" />
      <Navbar />
      <BackLay title={title}>
        <h1 aria-hidden="true">
          {title === 'Home' ? 'Sajeeb.' : title.concat('.')}
        </h1>
      </BackLay>
      <Cursor />
      <ScoutBar actions={actions(setTheme)} brandColor="var(--cw)" />
      <div className='container' style={{ display: "flex" }}>
        <div>
          <Sidebar />
        </div>
        <div>
          {!show && <>{children}</>}
        </div>
      </div>
    </Main>
  );
};

export const PageWrapper: React.FC<PropsWithChildren<{}> &
  React.HTMLAttributes<HTMLDivElement>> = ({
    children,
    className = '',
    ...rest
  }) => {
    return (
      <section {...rest} id="main-content">
        <div className={`${className}`}>
          <div className="row align-items-center justify-content-center">
            <div className="col-md-10">{children}</div>
          </div>
        </div>
      </section>
    );
  };

export default Layout;
