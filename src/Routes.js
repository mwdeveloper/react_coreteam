import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ThemeProvider } from '@material-ui/styles';

import MuiTheme from './theme';
import Layout from 'layouts';
import Home from 'containers/Home';
import GlobalStateProvider from 'contexts/GlobalStateProvider';
import Results from 'containers/Results';

const Routes = () => {
  const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0
    },
    in: {
      opacity: 1
    },
    out: {
      opacity: 0
    }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'linear',
    duration: 0.3
  };

  
  return (
    <ThemeProvider theme={MuiTheme}>
      <GlobalStateProvider>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path={[
            '/home',
            '/results',
            ]}>
            <Layout>
              <Switch location={location} key={location.pathname}>
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}>
                  <Route exact path="/home" component={Home} />
                  <Route exact path="/results" component={Results} />
                </motion.div>
              </Switch>
            </Layout>
          </Route>
        </Switch>
      </GlobalStateProvider>
    </ThemeProvider>
  );
};

export default Routes;
