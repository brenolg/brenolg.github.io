import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import Context from './Context';

export default function Provider({ children }) {
  const [frontIndex, setFrontIndex] = useState(0);

  const value = useMemo(
    () => ({
      frontIndex,
      setFrontIndex,
    }),
    [frontIndex],
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
