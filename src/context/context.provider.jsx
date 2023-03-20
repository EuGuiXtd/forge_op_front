import React, { useState, useMemo } from 'react';

import PropTypes from 'prop-types';
import TokenContext from './token.context';

function ContextProvider({ children }) {
  const [jwt, setJwt] = useState('');

  const contextValue = useMemo(() => (
    { jwt,
      setJwt,
    }), [jwt]);

  return (
    <TokenContext.Provider value={ contextValue }>
      {children}
    </TokenContext.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;
