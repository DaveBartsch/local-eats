import React, { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";

const Logout = (props) => {
  
 const setLoggedInUser=props.setLoggedInUser;
  const navigate = useNavigate();
  useEffect(() => {
    const logout = async () => {
      const response = await fetch("/users/logout");
      if (response.status === 200) {
        setLoggedInUser(null);
        navigate(-1);
      } else {
        alert("logout failed");
        navigate(-1);
      }
    };
    logout();
  }, []);

  return null;
};

export default Logout;