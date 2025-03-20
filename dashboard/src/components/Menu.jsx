import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../main.css";

const Menu = () => {
    const [selectedMenu, setSelectedMenu] = useState(0);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch user info from localStorage when component mounts
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleMenuClick = (index) => {
        setSelectedMenu(index);
    };

    const handleProfileClick = () => {
        setIsProfileDropdownOpen((prev) => !prev);
    };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    // Redirect to Login Page
    window.location.href = "http://localhost:5174/signup";
};

    return (
        <div className="menu-container">
            <img src="/logo.png" alt="Logo" style={{ width: "50px" }} />
            <div className="menus">
                <ul>
                    {["Dashboard", "Orders", "Holdings", "Positions", "Funds", "Apps"].map((item, index) => (
                        <li key={index}>
                            <Link to={`/${item.toLowerCase()}`} onClick={() => handleMenuClick(index)} style={{ textDecoration: "none" }}>
                                <p className={selectedMenu === index ? "menu selected" : "menu"}>{item}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
                <hr />

                {/* User Info Box */}
                <div className="profile" onClick={handleProfileClick}>
                    <div className="avatar">{user ? user.name.charAt(0).toUpperCase() : "U"}</div>
                    <p className="username">{user ? user.name : "User"}</p>

                    {isProfileDropdownOpen && (
                        <div className="dropdown">
                            <p className="email">{user?.email || "No Email"}</p>
                            <button className="logout-btn" onClick={handleLogout}>
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Menu;



