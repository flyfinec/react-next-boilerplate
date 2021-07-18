import React from 'react';

const AppContext = React.createContext();
const { Consumer, Provider } = AppContext;

export default AppContext;
export { Consumer, Provider };
