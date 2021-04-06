import React, { useContext } from 'react';
import clsx from 'clsx';
import Header from './Header';
import './style.scss'
import { GlobalState } from 'contexts/GlobalStateProvider';

const Layout = ({
  children
}) => {

  const {
    sidebarToggle,
    sidebarToggleMobile,
    sidebarFixed,
    headerFixed,
    headerSearchHover,
    headerDrawerToggle,
    footerFixed,
    contentBackground,
  } = useContext(GlobalState);

  return (
    <div
      className={clsx('app-wrapper', contentBackground, {
        'header-drawer-open': headerDrawerToggle,
        'app-sidebar-collapsed': sidebarToggle,
        'app-sidebar-mobile-open': sidebarToggleMobile,
        'app-sidebar-fixed': sidebarFixed,
        'app-header-fixed': headerFixed,
        'app-footer-fixed': footerFixed,
        'search-wrapper-open': headerSearchHover
      })}>
      <div className="app-main">
        <Header />
        <div className="app-content">
          <div className="app-content-inner">
            <div className="app-content--inner__wrapper">{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout;
