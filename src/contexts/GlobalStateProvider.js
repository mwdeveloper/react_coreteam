import React, { useState } from "react";
import PropTypes from "prop-types";

const GlobalState = React.createContext(null);

export { GlobalState };

const GlobalStateProvider = (props) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  return (
    <GlobalState.Provider
      value={{
        sidebarToggle,
        setSidebarToggle,
      }}
    >
      {props.children}
    </GlobalState.Provider>
  );
};

GlobalStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalStateProvider;
