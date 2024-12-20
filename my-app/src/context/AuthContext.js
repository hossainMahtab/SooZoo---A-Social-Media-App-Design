import React, { useEffect, useState } from "react";

export const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(
  //   JSON.parse(localStorage.getItem("user") || null)
  // );
  const [currentUser, setCurrentUser] = useState({
    id: 7,
    username: "Albert",
    profilePic:
      "https://images.pexels.com/photos/1509684/pexels-photo-1509684.jpeg?auto=compress&cs=tinysrgb&w=600",
  });

  const login = () => {
    setCurrentUser({
      id: 7,
      username: "Albert",
      profilePic:
        "https://images.pexels.com/photos/1509684/pexels-photo-1509684.jpeg?auto=compress&cs=tinysrgb&w=600",
    });
  };
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
