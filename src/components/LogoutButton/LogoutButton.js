import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../features/user/userSlice";
import { useNavigate } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import "./LogoutButton.css"; 

const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("ddsss")
    // Clear user login status from localStorage
    localStorage.removeItem("userLogin");
    
    // Clear user data from Redux store
    dispatch(logout());
    
    // Navigate to sign-in page
    navigate("/signin");
  };

  return (
    <button onClick={handleLogout} className="btn-logout">
      <AiOutlineLogout className="logout-icon" /> Log Out
    </button>
  );
};

export default LogoutButton;
