// src/contexts/AuthContext.js
import React, { createContext, useState } from 'react';

export  const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // no user by default

  const authData = { user, setUser };

  return( 
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  )
};

export default AuthProvider;
